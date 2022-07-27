import createShipmentSKU from "./scenarios/createShipmentSKU";
import userWidgets from "./scenarios/userWidgets";
const { testType = "smoke" } = __ENV;

const config = {
  smoke: [
    { duration: "1m", target: "20" } // minimal load with 1 concurrent user 
  ],
  load: [
    { duration: "5m", target: 50 }, // simulate ramp up of traffic from 1 t0 100 users over 5m
    { duration: "5m", target: 50 }, // stay at 100 users for 5m
    { duration: "1m", target: 10 }, // ramp down to 10 users
    { duration: "1m", target: 0 }, // ramp down to 0 users
  ],
  soak: [
    { "duration": "2m", "target": 400 }, // ramp up
    { "duration": "3h56m", "target": 400 }, // soak
    { "duration": "2m", "target": 10 }, // scale down
  ],
  spike: [
    { duration: '10s', target: 10 }, // below normal load
    { duration: '1m', target: 10 },
    { duration: '10s', target: __ENV.maxSpike || 20 }, // spike to 1400 users
    { duration: '5m', target: __ENV.maxSpike || 20 },
    { duration: '10s', target: 10 }, // scale down recovery stage
    { duration: '3m', target: 10 }, // after recovery
    { duration: '10s', target: 10 }
  ],
  stress: [
    { duration: "2m", target: 100 }, // below normal load
    { duration: "5m", target: 100 },
    { duration: "2m", target: 200 }, // normal load
    { duration: "5m", target: 200 },
    { duration: "2m", target: 300 }, // around the breaking point
    { duration: "5m", target: 300 },
    { duration: "2m", target: 400 }, // beyond the breaking point
    { duration: "5m", target: 400 },
    { duration: "2m", target: 10 }, // scale down, recovery stage 
  ]
}


export const options = {
  stages: config[testType],
  thresholds: {
    'http_req_duration{status:200}': ['max>=0'],
    'http_req_duration{status:403}': ['max>=0'],
    'http_req_duration{p99:below 1000}': ['p(99)<1000'], // 99% of requests must complete below 1.0s
  },
  ext: {
    loadimpact: {
      name: __ENV.loadZone || "wms",
      projectID: __ENV.projectId || 3595030,
      distribution: {
        private: {
          loadZone: __ENV.loadZone || 'amazon:us:ashburn', // amazon:in:mumbai
          percent: 100,
        },
      },
    },
  },
};

if(__ENV.iterations) {
  options["scenarios"] = {
    contacts: {
      executor: 'per-vu-iterations',
      vus: __ENV.vus || 10,
      iterations: __ENV.iterations,
      maxDuration: '30s',
    },
  };
  delete options["stages"];
}

export default function (scenario="userWidgets") {
  switch (scenario) {
    case "userWidgets":
      userWidgets();
      break;
  
    case "createShipmentSKU":
      createShipmentSKU();
      break;

    default:
      userWidgets();
      break;
  }
}
