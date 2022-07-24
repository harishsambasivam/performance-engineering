const { testType = "smoke" } = __ENV;
import { signUp } from "./scenarios/signUp";
import { addProduct } from "./scenarios/addProduct";
import { orderProduct } from "./scenarios/orderProduct";

const config = {
  smoke: [
    { duration: "1m", target: "2" } // minimal load with 1 concurrent user 
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
  }
};

const BASE_URL = 'http://performance-engineering-poc-alb-838128952.ap-south-1.elb.amazonaws.com';

export default async () => {
  try {
    switch (__ENV.scenario="orderProduct") {
      case "signUp":
        await signUp(BASE_URL);
      case "addProduct":
        await addProduct(BASE_URL);
      case "orderProduct":
        await orderProduct(BASE_URL);
    }
  } catch (err) {
    console.log(err.message);
  }
};

