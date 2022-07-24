// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 2,
  iterations: "5",
  ext: {
    loadimpact: {
      name: 'WMS flpw',
      projectID: 3594503,
      distribution: {
        distributionLabel1: { loadZone: 'amazon:in:mumbai', percent: 100 }
      },
      note: 'Anything that may be worth noting about your test.',
    },
  },
}

export default function main() {
  let response

  group('page_1 - https://uat-wms.byjusorders.com/dashboard/floor-inventory', function () {
    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=5&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fdashboard&ul=en-gb&de=UTF-8&dt=Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=44223780',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=6&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fdashboard%2Ffloor-inventory&ul=en-gb&de=UTF-8&dt=Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=546432629',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/dashboard/getFloorOverview',
      '{"startDate":"2022-05-24T11:04:40.281Z","endDate":"2022-07-22T11:04:40.281Z","groupByDate":"createdAt","subType":"all"}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg0OTE0NjQsImlhdCI6MTY1ODQ4Nzg2NCwianRpIjoiNmNhMjM1NGItODdiZi00YjcwLThlMjItMjJhZmJlM2Q4NDEwIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.1qJCpSIxlOm6Y6M3haeeZtak8_OLjrb3Fen3x7L5jQQTxODIEWqUMFTUZqFp-uLsC0ZLlgKFcrACmFrWulZ6NR4rFXy38nRKqJxMmTAWcttYvvYZ7-rLOVceldOJBjAmPSmmTOeYMfuTe3OrdjL6NfDyYRuh6Y0oP3FZ13GVz4R4mJ1rGqzrF_72n-X-KdfiIi6yaLaw5xEJDR8l8Qzf6xj7RPsQ6tpa7EiwOzXrndQiq0skdpS7LvhAhaDOhC2H9ZOzMXveP_tjFLv1_jxGphwVZhe2TJTgT51k8VMfOm1wb9X0kfFPf9ah12YudKaY5qFwRlhIQ2jnnoEC1AxRWg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicW9MZUZDdURWQmZFSTVFUjdpOTBmUSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODQ5MTQ2NCwiaWF0IjoxNjU4NDg3ODY0LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIxZTJkZWNhZi1mMzA1LTRjY2MtOTc3MC0zODBkOThhZWNmNzEiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.B-cUcTIE719C4lpIvx8x7jYchlCMC19ue4XVj5UUpUZbi1HnPeTVUBqpV13KQkehI7me-Q8zvmPOK0aCoxzQVkZYTlrFGHhOXpm8kugaCHvAFbJV8kihFV8FKcpDeyn2RxuxU-Y6RLFhmh6HUBJLcKHf6Cm30f7o1rDAnkfEP4KlplaDbu_NeclLUY5RX07b2b2dHgoZdiaQ5IJ7AryizneAYDSkeGjImMX5-XPnJxBi5w_KXG_7_vIRE0JRRfnSmxIBJCMivPlaVFUsKKXplBOf0SIjwY5AYLUZcf1uPJjpGgO62bXk3gq1IIzQvu6f5d7icjtO-7pOpc8PPdo66Q',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
        },
      }
    )

    response = http.post(
      'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/dashboard/getFloorOverview',
      '{"startDate":"2022-05-24T11:04:40.281Z","endDate":"2022-07-22T11:04:40.281Z","groupByDate":"createdAt","subType":"all"}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg0OTE0NjQsImlhdCI6MTY1ODQ4Nzg2NCwianRpIjoiNmNhMjM1NGItODdiZi00YjcwLThlMjItMjJhZmJlM2Q4NDEwIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.1qJCpSIxlOm6Y6M3haeeZtak8_OLjrb3Fen3x7L5jQQTxODIEWqUMFTUZqFp-uLsC0ZLlgKFcrACmFrWulZ6NR4rFXy38nRKqJxMmTAWcttYvvYZ7-rLOVceldOJBjAmPSmmTOeYMfuTe3OrdjL6NfDyYRuh6Y0oP3FZ13GVz4R4mJ1rGqzrF_72n-X-KdfiIi6yaLaw5xEJDR8l8Qzf6xj7RPsQ6tpa7EiwOzXrndQiq0skdpS7LvhAhaDOhC2H9ZOzMXveP_tjFLv1_jxGphwVZhe2TJTgT51k8VMfOm1wb9X0kfFPf9ah12YudKaY5qFwRlhIQ2jnnoEC1AxRWg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicW9MZUZDdURWQmZFSTVFUjdpOTBmUSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODQ5MTQ2NCwiaWF0IjoxNjU4NDg3ODY0LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIxZTJkZWNhZi1mMzA1LTRjY2MtOTc3MC0zODBkOThhZWNmNzEiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.B-cUcTIE719C4lpIvx8x7jYchlCMC19ue4XVj5UUpUZbi1HnPeTVUBqpV13KQkehI7me-Q8zvmPOK0aCoxzQVkZYTlrFGHhOXpm8kugaCHvAFbJV8kihFV8FKcpDeyn2RxuxU-Y6RLFhmh6HUBJLcKHf6Cm30f7o1rDAnkfEP4KlplaDbu_NeclLUY5RX07b2b2dHgoZdiaQ5IJ7AryizneAYDSkeGjImMX5-XPnJxBi5w_KXG_7_vIRE0JRRfnSmxIBJCMivPlaVFUsKKXplBOf0SIjwY5AYLUZcf1uPJjpGgO62bXk3gq1IIzQvu6f5d7icjtO-7pOpc8PPdo66Q',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
        },
      }
    )

    response = http.options(
      'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/dashboard/getFloorOverview',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'content-type,x-access-token,x-app-origin,x-id-token,x-refresh-token',
          'access-control-request-method': 'POST',
          origin: 'https://uat-wms.byjusorders.com',
          'sec-fetch-mode': 'cors',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://uat-wms.byjusorders.com/ims-logo.svg', {
      headers: {
        referer: 'https://uat-wms.byjusorders.com/dashboard/floor-inventory',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.options(
      'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/dashboard/getFloorOverview',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'content-type,x-access-token,x-app-origin,x-id-token,x-refresh-token',
          'access-control-request-method': 'POST',
          origin: 'https://uat-wms.byjusorders.com',
          'sec-fetch-mode': 'cors',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://uat-wms.byjusorders.com/ims-logo.svg', {
      headers: {
        referer: 'https://uat-wms.byjusorders.com/dashboard/floor-inventory',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://uat-wms.byjusorders.com/static/css/16.18fb2ca0.chunk.css', {
      headers: {
        referer: 'https://uat-wms.byjusorders.com/settings',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://uat-wms.byjusorders.com/static/js/16.624520c4.chunk.js', {
      headers: {
        referer: 'https://uat-wms.byjusorders.com/settings',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://uat-wms.byjusorders.com/static/css/14.631b2808.chunk.css', {
      headers: {
        referer: 'https://uat-wms.byjusorders.com/settings',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://uat-wms.byjusorders.com/static/js/14.543051e0.chunk.js', {
      headers: {
        referer: 'https://uat-wms.byjusorders.com/settings',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=7&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fsettings&ul=en-gb&de=UTF-8&dt=Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=13260301',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=8&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fsettings%2Froles&ul=en-gb&de=UTF-8&dt=Settings%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=1716007758',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/appuser/listAll',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg0OTE0NjQsImlhdCI6MTY1ODQ4Nzg2NCwianRpIjoiNmNhMjM1NGItODdiZi00YjcwLThlMjItMjJhZmJlM2Q4NDEwIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.1qJCpSIxlOm6Y6M3haeeZtak8_OLjrb3Fen3x7L5jQQTxODIEWqUMFTUZqFp-uLsC0ZLlgKFcrACmFrWulZ6NR4rFXy38nRKqJxMmTAWcttYvvYZ7-rLOVceldOJBjAmPSmmTOeYMfuTe3OrdjL6NfDyYRuh6Y0oP3FZ13GVz4R4mJ1rGqzrF_72n-X-KdfiIi6yaLaw5xEJDR8l8Qzf6xj7RPsQ6tpa7EiwOzXrndQiq0skdpS7LvhAhaDOhC2H9ZOzMXveP_tjFLv1_jxGphwVZhe2TJTgT51k8VMfOm1wb9X0kfFPf9ah12YudKaY5qFwRlhIQ2jnnoEC1AxRWg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicW9MZUZDdURWQmZFSTVFUjdpOTBmUSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODQ5MTQ2NCwiaWF0IjoxNjU4NDg3ODY0LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIxZTJkZWNhZi1mMzA1LTRjY2MtOTc3MC0zODBkOThhZWNmNzEiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.B-cUcTIE719C4lpIvx8x7jYchlCMC19ue4XVj5UUpUZbi1HnPeTVUBqpV13KQkehI7me-Q8zvmPOK0aCoxzQVkZYTlrFGHhOXpm8kugaCHvAFbJV8kihFV8FKcpDeyn2RxuxU-Y6RLFhmh6HUBJLcKHf6Cm30f7o1rDAnkfEP4KlplaDbu_NeclLUY5RX07b2b2dHgoZdiaQ5IJ7AryizneAYDSkeGjImMX5-XPnJxBi5w_KXG_7_vIRE0JRRfnSmxIBJCMivPlaVFUsKKXplBOf0SIjwY5AYLUZcf1uPJjpGgO62bXk3gq1IIzQvu6f5d7icjtO-7pOpc8PPdo66Q',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
        },
      }
    )

    response = http.options(
      'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/appuser/listAll',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'content-type,x-access-token,x-app-origin,x-id-token,x-refresh-token',
          'access-control-request-method': 'GET',
          origin: 'https://uat-wms.byjusorders.com',
          'sec-fetch-mode': 'cors',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/approle/list',
      '{"gridId":"ims_approle_grid","viewName":"all","model":"AppRole","page":1,"limit":10,"contextCriterias":[],"sort":{}}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg0OTE0NjQsImlhdCI6MTY1ODQ4Nzg2NCwianRpIjoiNmNhMjM1NGItODdiZi00YjcwLThlMjItMjJhZmJlM2Q4NDEwIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.1qJCpSIxlOm6Y6M3haeeZtak8_OLjrb3Fen3x7L5jQQTxODIEWqUMFTUZqFp-uLsC0ZLlgKFcrACmFrWulZ6NR4rFXy38nRKqJxMmTAWcttYvvYZ7-rLOVceldOJBjAmPSmmTOeYMfuTe3OrdjL6NfDyYRuh6Y0oP3FZ13GVz4R4mJ1rGqzrF_72n-X-KdfiIi6yaLaw5xEJDR8l8Qzf6xj7RPsQ6tpa7EiwOzXrndQiq0skdpS7LvhAhaDOhC2H9ZOzMXveP_tjFLv1_jxGphwVZhe2TJTgT51k8VMfOm1wb9X0kfFPf9ah12YudKaY5qFwRlhIQ2jnnoEC1AxRWg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicW9MZUZDdURWQmZFSTVFUjdpOTBmUSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODQ5MTQ2NCwiaWF0IjoxNjU4NDg3ODY0LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIxZTJkZWNhZi1mMzA1LTRjY2MtOTc3MC0zODBkOThhZWNmNzEiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.B-cUcTIE719C4lpIvx8x7jYchlCMC19ue4XVj5UUpUZbi1HnPeTVUBqpV13KQkehI7me-Q8zvmPOK0aCoxzQVkZYTlrFGHhOXpm8kugaCHvAFbJV8kihFV8FKcpDeyn2RxuxU-Y6RLFhmh6HUBJLcKHf6Cm30f7o1rDAnkfEP4KlplaDbu_NeclLUY5RX07b2b2dHgoZdiaQ5IJ7AryizneAYDSkeGjImMX5-XPnJxBi5w_KXG_7_vIRE0JRRfnSmxIBJCMivPlaVFUsKKXplBOf0SIjwY5AYLUZcf1uPJjpGgO62bXk3gq1IIzQvu6f5d7icjtO-7pOpc8PPdo66Q',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
        },
      }
    )

    response = http.options(
      'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/approle/list',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'content-type,x-access-token,x-app-origin,x-id-token,x-refresh-token',
          'access-control-request-method': 'POST',
          origin: 'https://uat-wms.byjusorders.com',
          'sec-fetch-mode': 'cors',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=9&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fsettings&ul=en-gb&de=UTF-8&dt=Roles%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=857017969',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=10&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fsettings%2Fusers&ul=en-gb&de=UTF-8&dt=Settings%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=1702629456',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/appuser/list',
      '{"gridId":"ims_appuser_grid","viewName":"all","model":"AppUser","page":1,"limit":10,"contextCriterias":[],"sort":{"actionDetails.lastActivityAt":"DESC"}}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg0OTE0NjQsImlhdCI6MTY1ODQ4Nzg2NCwianRpIjoiNmNhMjM1NGItODdiZi00YjcwLThlMjItMjJhZmJlM2Q4NDEwIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.1qJCpSIxlOm6Y6M3haeeZtak8_OLjrb3Fen3x7L5jQQTxODIEWqUMFTUZqFp-uLsC0ZLlgKFcrACmFrWulZ6NR4rFXy38nRKqJxMmTAWcttYvvYZ7-rLOVceldOJBjAmPSmmTOeYMfuTe3OrdjL6NfDyYRuh6Y0oP3FZ13GVz4R4mJ1rGqzrF_72n-X-KdfiIi6yaLaw5xEJDR8l8Qzf6xj7RPsQ6tpa7EiwOzXrndQiq0skdpS7LvhAhaDOhC2H9ZOzMXveP_tjFLv1_jxGphwVZhe2TJTgT51k8VMfOm1wb9X0kfFPf9ah12YudKaY5qFwRlhIQ2jnnoEC1AxRWg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicW9MZUZDdURWQmZFSTVFUjdpOTBmUSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODQ5MTQ2NCwiaWF0IjoxNjU4NDg3ODY0LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIxZTJkZWNhZi1mMzA1LTRjY2MtOTc3MC0zODBkOThhZWNmNzEiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.B-cUcTIE719C4lpIvx8x7jYchlCMC19ue4XVj5UUpUZbi1HnPeTVUBqpV13KQkehI7me-Q8zvmPOK0aCoxzQVkZYTlrFGHhOXpm8kugaCHvAFbJV8kihFV8FKcpDeyn2RxuxU-Y6RLFhmh6HUBJLcKHf6Cm30f7o1rDAnkfEP4KlplaDbu_NeclLUY5RX07b2b2dHgoZdiaQ5IJ7AryizneAYDSkeGjImMX5-XPnJxBi5w_KXG_7_vIRE0JRRfnSmxIBJCMivPlaVFUsKKXplBOf0SIjwY5AYLUZcf1uPJjpGgO62bXk3gq1IIzQvu6f5d7icjtO-7pOpc8PPdo66Q',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
        },
      }
    )

    response = http.get(
      'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/approle/listAll',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg0OTE0NjQsImlhdCI6MTY1ODQ4Nzg2NCwianRpIjoiNmNhMjM1NGItODdiZi00YjcwLThlMjItMjJhZmJlM2Q4NDEwIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.1qJCpSIxlOm6Y6M3haeeZtak8_OLjrb3Fen3x7L5jQQTxODIEWqUMFTUZqFp-uLsC0ZLlgKFcrACmFrWulZ6NR4rFXy38nRKqJxMmTAWcttYvvYZ7-rLOVceldOJBjAmPSmmTOeYMfuTe3OrdjL6NfDyYRuh6Y0oP3FZ13GVz4R4mJ1rGqzrF_72n-X-KdfiIi6yaLaw5xEJDR8l8Qzf6xj7RPsQ6tpa7EiwOzXrndQiq0skdpS7LvhAhaDOhC2H9ZOzMXveP_tjFLv1_jxGphwVZhe2TJTgT51k8VMfOm1wb9X0kfFPf9ah12YudKaY5qFwRlhIQ2jnnoEC1AxRWg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicW9MZUZDdURWQmZFSTVFUjdpOTBmUSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODQ5MTQ2NCwiaWF0IjoxNjU4NDg3ODY0LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIxZTJkZWNhZi1mMzA1LTRjY2MtOTc3MC0zODBkOThhZWNmNzEiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.B-cUcTIE719C4lpIvx8x7jYchlCMC19ue4XVj5UUpUZbi1HnPeTVUBqpV13KQkehI7me-Q8zvmPOK0aCoxzQVkZYTlrFGHhOXpm8kugaCHvAFbJV8kihFV8FKcpDeyn2RxuxU-Y6RLFhmh6HUBJLcKHf6Cm30f7o1rDAnkfEP4KlplaDbu_NeclLUY5RX07b2b2dHgoZdiaQ5IJ7AryizneAYDSkeGjImMX5-XPnJxBi5w_KXG_7_vIRE0JRRfnSmxIBJCMivPlaVFUsKKXplBOf0SIjwY5AYLUZcf1uPJjpGgO62bXk3gq1IIzQvu6f5d7icjtO-7pOpc8PPdo66Q',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
        },
      }
    )

    response = http.options(
      'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/appuser/list',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'content-type,x-access-token,x-app-origin,x-id-token,x-refresh-token',
          'access-control-request-method': 'POST',
          origin: 'https://uat-wms.byjusorders.com',
          'sec-fetch-mode': 'cors',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.options(
      'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/approle/listAll',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'content-type,x-access-token,x-app-origin,x-id-token,x-refresh-token',
          'access-control-request-method': 'GET',
          origin: 'https://uat-wms.byjusorders.com',
          'sec-fetch-mode': 'cors',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a/AItbvml4MhOFXYbvY6kseNGcw_AazUzOBQUGaXC3faQA=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a/AItbvmmfdqOq-2WQ4twC2Z2uih7YfJpzfK5Y80IEtmD1=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a/AItbvmkgTWE26HeI-gnMpmF57Hi9Sy-j-MbAPgLN-pJa=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a/AItbvmmNq7zvqYv0fXVA30JtRGuMM6v4BksHtA0AzIEJ=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a/AItbvmksQuOZIsjYI_KeSe_p7zSgp3sKX8JzTnNjx8gU=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AFdZucqv4q6xZtehd1ZSjV-JFHnfq5XfWFjkExN7foHS=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AFdZucoSMZFp168KIt9H5eNQV3g5bzAE8moYUxIhnoOk=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AFdZucork7B5yKTzSW4_JEbhNIuVyhbCALcRSVAWTvDPow=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a/AItbvmld3SLw7sEvPGYkyLOj4SDH0LeGjqtANQ2-YgZY=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://lh3.googleusercontent.com/a-/AFdZucoltiUWIoOt0o0oKetJjgR8kRaJNuj1-2hhkY4v=s96-c',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=11&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fsettings&ul=en-gb&de=UTF-8&dt=Users%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=1304346643',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=12&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fadmin&ul=en-gb&de=UTF-8&dt=Settings%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=1758140646',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=13&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fadmin%2Fraw-material-skus&ul=en-gb&de=UTF-8&dt=Admin%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=1126116507',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/admin/rawmaterialsku',
      '{"gridId":"raw_material_sku_base_grid","viewName":"all","model":"RawMaterialSkuMaster","page":1,"limit":10,"contextCriterias":[],"sort":{"updatedAt":"desc"}}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg0OTE0NjQsImlhdCI6MTY1ODQ4Nzg2NCwianRpIjoiNmNhMjM1NGItODdiZi00YjcwLThlMjItMjJhZmJlM2Q4NDEwIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.1qJCpSIxlOm6Y6M3haeeZtak8_OLjrb3Fen3x7L5jQQTxODIEWqUMFTUZqFp-uLsC0ZLlgKFcrACmFrWulZ6NR4rFXy38nRKqJxMmTAWcttYvvYZ7-rLOVceldOJBjAmPSmmTOeYMfuTe3OrdjL6NfDyYRuh6Y0oP3FZ13GVz4R4mJ1rGqzrF_72n-X-KdfiIi6yaLaw5xEJDR8l8Qzf6xj7RPsQ6tpa7EiwOzXrndQiq0skdpS7LvhAhaDOhC2H9ZOzMXveP_tjFLv1_jxGphwVZhe2TJTgT51k8VMfOm1wb9X0kfFPf9ah12YudKaY5qFwRlhIQ2jnnoEC1AxRWg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicW9MZUZDdURWQmZFSTVFUjdpOTBmUSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODQ5MTQ2NCwiaWF0IjoxNjU4NDg3ODY0LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIxZTJkZWNhZi1mMzA1LTRjY2MtOTc3MC0zODBkOThhZWNmNzEiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.B-cUcTIE719C4lpIvx8x7jYchlCMC19ue4XVj5UUpUZbi1HnPeTVUBqpV13KQkehI7me-Q8zvmPOK0aCoxzQVkZYTlrFGHhOXpm8kugaCHvAFbJV8kihFV8FKcpDeyn2RxuxU-Y6RLFhmh6HUBJLcKHf6Cm30f7o1rDAnkfEP4KlplaDbu_NeclLUY5RX07b2b2dHgoZdiaQ5IJ7AryizneAYDSkeGjImMX5-XPnJxBi5w_KXG_7_vIRE0JRRfnSmxIBJCMivPlaVFUsKKXplBOf0SIjwY5AYLUZcf1uPJjpGgO62bXk3gq1IIzQvu6f5d7icjtO-7pOpc8PPdo66Q',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
        },
      }
    )

    response = http.options(
      'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/admin/rawmaterialsku',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'content-type,x-access-token,x-app-origin,x-id-token,x-refresh-token',
          'access-control-request-method': 'POST',
          origin: 'https://uat-wms.byjusorders.com',
          'sec-fetch-mode': 'cors',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=14&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fadmin&ul=en-gb&de=UTF-8&dt=Raw%20Material%20Skus%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=1672349935',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=15&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fadmin%2Fbom-master&ul=en-gb&de=UTF-8&dt=Admin%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=1137055883',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.post(
      'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/admin/bom-master',
      '{"gridId":"bom_master_base_grid","viewName":"all","model":"BomMaster","page":1,"limit":10,"contextCriterias":[],"sort":{"createdAt":"desc"}}',
      {
        headers: {
          'content-type': 'application/json',
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg0OTE0NjQsImlhdCI6MTY1ODQ4Nzg2NCwianRpIjoiNmNhMjM1NGItODdiZi00YjcwLThlMjItMjJhZmJlM2Q4NDEwIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.1qJCpSIxlOm6Y6M3haeeZtak8_OLjrb3Fen3x7L5jQQTxODIEWqUMFTUZqFp-uLsC0ZLlgKFcrACmFrWulZ6NR4rFXy38nRKqJxMmTAWcttYvvYZ7-rLOVceldOJBjAmPSmmTOeYMfuTe3OrdjL6NfDyYRuh6Y0oP3FZ13GVz4R4mJ1rGqzrF_72n-X-KdfiIi6yaLaw5xEJDR8l8Qzf6xj7RPsQ6tpa7EiwOzXrndQiq0skdpS7LvhAhaDOhC2H9ZOzMXveP_tjFLv1_jxGphwVZhe2TJTgT51k8VMfOm1wb9X0kfFPf9ah12YudKaY5qFwRlhIQ2jnnoEC1AxRWg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoicW9MZUZDdURWQmZFSTVFUjdpOTBmUSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODQ5MTQ2NCwiaWF0IjoxNjU4NDg3ODY0LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIxZTJkZWNhZi1mMzA1LTRjY2MtOTc3MC0zODBkOThhZWNmNzEiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.B-cUcTIE719C4lpIvx8x7jYchlCMC19ue4XVj5UUpUZbi1HnPeTVUBqpV13KQkehI7me-Q8zvmPOK0aCoxzQVkZYTlrFGHhOXpm8kugaCHvAFbJV8kihFV8FKcpDeyn2RxuxU-Y6RLFhmh6HUBJLcKHf6Cm30f7o1rDAnkfEP4KlplaDbu_NeclLUY5RX07b2b2dHgoZdiaQ5IJ7AryizneAYDSkeGjImMX5-XPnJxBi5w_KXG_7_vIRE0JRRfnSmxIBJCMivPlaVFUsKKXplBOf0SIjwY5AYLUZcf1uPJjpGgO62bXk3gq1IIzQvu6f5d7icjtO-7pOpc8PPdo66Q',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
        },
      }
    )

    response = http.options(
      'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/admin/bom-master',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'content-type,x-access-token,x-app-origin,x-id-token,x-refresh-token',
          'access-control-request-method': 'POST',
          origin: 'https://uat-wms.byjusorders.com',
          'sec-fetch-mode': 'cors',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j96&a=1115321624&t=pageview&_s=16&dl=https%3A%2F%2Fuat-wms.byjusorders.com%2Fadmin&dp=%2Fadmin&ul=en-gb&de=UTF-8&dt=Bom%20Master%20-%20Byjus%20WMS&sd=30-bit&sr=1440x900&vp=1440x764&je=0&_u=SACAAEABAAAAAC~&jid=&gjid=&cid=63594504.1655791312&tid=UA-146798497-2&_gid=970028203.1658135416&z=590276938',
      {
        headers: {
          referer: 'https://uat-wms.byjusorders.com/',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}


export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
