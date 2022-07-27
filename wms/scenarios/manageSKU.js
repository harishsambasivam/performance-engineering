import { sleep, group } from 'k6'
import http from 'k6/http'
import * as faker from 'faker/locale/en_US'; 

export default function scenario_1() {
  let response;

  const payload = { "name": faker.random.alphaNumeric(10), "appCategory": "ims", "moduleCategory": "ims_core", "csvHeaders": "test1,test2", "sampleRecords": "test", "createdBy": "harish.sambasivam@byjus.com" };

  const payload1 = {
    "shipmentSkuData": [
      { "shipmentSkuId": "BK08KXTS0820", "status": "inactive" }
    ],
    "rmSkuData": [{ "rmSkuId": "THKHGSFDK", "rmSkuQuantity": "1" }]
  };  

  const payload2 = {
    "model": "ShipmentSkuMaster",
    "filter": {
      "conditionType": "$and",
      "searchBuilder": [
        {
          "selectedColumn": "status",
          "selectedOperator": "equal",
          "selectedValue": "active"
        },
        {
          "selectedColumn": "type",
          "selectedOperator": "equal",
          "selectedValue": "book"
        },
        {
          "selectedColumn": "skuId",
          "selectedOperator": "contains",
          "selectedValue": "BK08KXTS0820"
        }
      ]
    },
    "displayKey": "skuId",
    "valueKey": "skuId",
    "sort": {}
  };  


  const payload3 = {
    "gridId": "bom_master_base_grid",
    "viewName": "all",
    "model": "BomMaster",
    "page": 1,
    "limit": 10,
    "contextCriterias": [],
    "sort": { "createdAt": "desc" }
  };  

  group(
    'MANAGE SKU',
    function () {

      response = http.post(
        'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/dashboard/getFloorOverview',
        '{\n  "startDate": "2022-05-28T13:23:45.950Z",\n  "endDate": "2022-07-26T13:23:45.950Z",\n  "groupByDate": "createdAt",\n  "subType": "all"\n}\n',
        {
          headers: {
            'content-type': 'application/json',
            'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-access-token':
              'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg4NDM3NDMsImlhdCI6MTY1ODg0MDE0MywianRpIjoiNjE2N2FmMGItYzdlZi00M2Y5LWJmOGMtZmViNjQ4ZmI0MGU5IiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.h0YIlnwtvqS47hYwzBQ7LkVoSvAAXpV8YuvWP_849pflA_Lb7Kc8dr87mWpMoJIohWC5IpFCxWWdMbQxYG4h4RTg9YyPp-XN0ppnSZpXzIhWQPiRpu_xg1tp7rf4QsCMR8dy0Yap18CzpZafpTAY0jdnWhxM966TSLvWxJBkBvft_0hMqLa4rbXCdK2rmQwrW5ENwjzSIXNDxmyVuEFNTx0PEH0517z1C5siRq0yyhb7Gps-xSZOsU5vc88IiCesv6uFldSr8z6Y9rLpLK3RiICTY7tHVXwIgcePKVXlYwR1r9RwiG-bHm7a2DjnKi3eJt2nEcO0jNOXPaRhcEw6-A',
            'x-app-origin': 'ims',
            'x-id-token':
              'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiME94c1hoNjB2OHZoTUpBOWRpUDVxQSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODg0Mzc0MywiaWF0IjoxNjU4ODQwMTQzLCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiJhNzZkYzFiZi1mZWQyLTRlYjUtOTBhMy00NDc1YWU5ZDljYWYiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.Esc5fRk4ovapwbMfjoTcN5v3uXHzr9NutsWJt8m2pkOSlTz34Nfjyw7usn6oF4qCoI9xigOqtAswVT86dYFNs_f0KFZn0khb9KY8LCth2mi_Ja-wSSZAgt4A15TjQFL8_rR0YCOT3gT2cl6GPceCXwfC_gMMs2uvtnHzLl7cYFe2yHX0lVoo51RUDhewycVELSdUAxUpqqpUpaR2DcI2XMFq-2Pw5v4OPAjd3wqTocMZFmBWxBjWpoioUhrHuqtOwJ8gxs8hnBxBg4hEl_mrAKrRd2-raukgO7EcXjvSnzxxt8lAuKISZS9tCztXy7VNxosmn99zbDN-hBwSFAumyw',
            'x-refresh-token':
              'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
          },
        }
      )

      response = http.post(
        'https://uat-nucleus.byjusorders.com/nucleusapi/usermanagement/batchmanagement/upload',
        JSON.stringify(payload),
        {
          headers: {
            'content-type': 'application/json',
            'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-access-token':
              'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg4MTAxOTgsImlhdCI6MTY1ODgwNjU5OCwianRpIjoiZjRmOTNjNmItMTcwYy00MjYwLWFmYTItOTQyN2NiZTYyODUxIiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.02iCPTQhUGLkxiM3skPljGirqZsp2J_ZBI6P8UUfvFOHMo-ouIqxK_VTKkPsk8PMbvvCRMYGsl6ZfrcnzJweZLoVZFWBYRVKideBjSsSUXHRxppqSKf7-86AuosE_auNzkmKhYvZOc_zoHR8szsngZ5sh6yyOafdax8c-VwGe03Dti7J3huL2BMUn926hgQDHSbX-GKEyYg5u2iWcmoolVg2F-nMzpqtYV82rq8ZktwpkPpZdfcjTdVcuwhn4xmZUL0ZRPiMKTaNjj65W-tj6PqznR5XWL-2tzhqO5LTu9hsQAyyB-cLWpKzAfh8f3DN6bJBZcPAzCTVrdsV4KRzkA',
            'x-app-origin': 'ims',
            'x-id-token':
              'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiVy1MYzJBcWQzeWRsdVFONkRtakp4ZyIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODgxMDE5OCwiaWF0IjoxNjU4ODA2NTk4LCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiIyZWY2YjljNi04OGQ0LTRmZGUtOGMwZC1iZjE0NjM5ZDBlZjYiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.GqeWdzCBWXw_cRZgWXFhUv3TAQAaNXVeJXUz-BzqbmpmbOHK7KF9eiNu62H9m1ldkIBJ3qQ7TXg1TEjKlIcVQvGVV8PfrydADu9OjxlJ5ItsU6M79_VjFWOGQwWf7PLu4duQP6pLWdsucBS6jwPkBDThd-5yxIlfBeQm4N0oeEFrBgd86INVNj4Wj74I5KYNan3u3szAGrb1ECNfsTBE9HrSka5ee7oxUC6RMlxcJzBnDacw9ls1DlZv6c14cHM43bqkbKZ8WWZAyM9sTYQi3V5gE_e5fmB8rP6z5wM500qUG2pD7nZnGm15YPMQE9m6JsxjjBpoBim28hxH8BsC4g',
            'x-refresh-token':
              'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
          },
        }
      )


      response = http.post(
        'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/admin/bom/saveBom',
        JSON.stringify(payload1),
        {
          headers: {
            'content-type': 'application/json',
            'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-access-token':
              'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg4NDM3NDMsImlhdCI6MTY1ODg0MDE0MywianRpIjoiNjE2N2FmMGItYzdlZi00M2Y5LWJmOGMtZmViNjQ4ZmI0MGU5IiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.h0YIlnwtvqS47hYwzBQ7LkVoSvAAXpV8YuvWP_849pflA_Lb7Kc8dr87mWpMoJIohWC5IpFCxWWdMbQxYG4h4RTg9YyPp-XN0ppnSZpXzIhWQPiRpu_xg1tp7rf4QsCMR8dy0Yap18CzpZafpTAY0jdnWhxM966TSLvWxJBkBvft_0hMqLa4rbXCdK2rmQwrW5ENwjzSIXNDxmyVuEFNTx0PEH0517z1C5siRq0yyhb7Gps-xSZOsU5vc88IiCesv6uFldSr8z6Y9rLpLK3RiICTY7tHVXwIgcePKVXlYwR1r9RwiG-bHm7a2DjnKi3eJt2nEcO0jNOXPaRhcEw6-A',
            'x-app-origin': 'ims',
            'x-id-token':
              'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiME94c1hoNjB2OHZoTUpBOWRpUDVxQSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODg0Mzc0MywiaWF0IjoxNjU4ODQwMTQzLCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiJhNzZkYzFiZi1mZWQyLTRlYjUtOTBhMy00NDc1YWU5ZDljYWYiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.Esc5fRk4ovapwbMfjoTcN5v3uXHzr9NutsWJt8m2pkOSlTz34Nfjyw7usn6oF4qCoI9xigOqtAswVT86dYFNs_f0KFZn0khb9KY8LCth2mi_Ja-wSSZAgt4A15TjQFL8_rR0YCOT3gT2cl6GPceCXwfC_gMMs2uvtnHzLl7cYFe2yHX0lVoo51RUDhewycVELSdUAxUpqqpUpaR2DcI2XMFq-2Pw5v4OPAjd3wqTocMZFmBWxBjWpoioUhrHuqtOwJ8gxs8hnBxBg4hEl_mrAKrRd2-raukgO7EcXjvSnzxxt8lAuKISZS9tCztXy7VNxosmn99zbDN-hBwSFAumyw',
            'x-refresh-token':
              'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
          },
        }
      )
      sleep(1)

      response = http.post(
        'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/pgcombo',
        JSON.stringify(payload2),
        {
          headers: {
            'content-type': 'application/json',
            'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-access-token':
              'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg4NDM3NDMsImlhdCI6MTY1ODg0MDE0MywianRpIjoiNjE2N2FmMGItYzdlZi00M2Y5LWJmOGMtZmViNjQ4ZmI0MGU5IiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.h0YIlnwtvqS47hYwzBQ7LkVoSvAAXpV8YuvWP_849pflA_Lb7Kc8dr87mWpMoJIohWC5IpFCxWWdMbQxYG4h4RTg9YyPp-XN0ppnSZpXzIhWQPiRpu_xg1tp7rf4QsCMR8dy0Yap18CzpZafpTAY0jdnWhxM966TSLvWxJBkBvft_0hMqLa4rbXCdK2rmQwrW5ENwjzSIXNDxmyVuEFNTx0PEH0517z1C5siRq0yyhb7Gps-xSZOsU5vc88IiCesv6uFldSr8z6Y9rLpLK3RiICTY7tHVXwIgcePKVXlYwR1r9RwiG-bHm7a2DjnKi3eJt2nEcO0jNOXPaRhcEw6-A',
            'x-app-origin': 'ims',
            'x-id-token':
              'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiME94c1hoNjB2OHZoTUpBOWRpUDVxQSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODg0Mzc0MywiaWF0IjoxNjU4ODQwMTQzLCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiJhNzZkYzFiZi1mZWQyLTRlYjUtOTBhMy00NDc1YWU5ZDljYWYiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.Esc5fRk4ovapwbMfjoTcN5v3uXHzr9NutsWJt8m2pkOSlTz34Nfjyw7usn6oF4qCoI9xigOqtAswVT86dYFNs_f0KFZn0khb9KY8LCth2mi_Ja-wSSZAgt4A15TjQFL8_rR0YCOT3gT2cl6GPceCXwfC_gMMs2uvtnHzLl7cYFe2yHX0lVoo51RUDhewycVELSdUAxUpqqpUpaR2DcI2XMFq-2Pw5v4OPAjd3wqTocMZFmBWxBjWpoioUhrHuqtOwJ8gxs8hnBxBg4hEl_mrAKrRd2-raukgO7EcXjvSnzxxt8lAuKISZS9tCztXy7VNxosmn99zbDN-hBwSFAumyw',
            'x-refresh-token':
              'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
          },
        }
      )
      sleep(1)

      response = http.post(
        'https://uat-nucleus.byjusorders.com/nucleusapi/warehousemanagement/admin/bom-master',
        JSON.stringify(payload3),
        {
          headers: {
            'content-type': 'application/json',
            'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-access-token':
              'eyJraWQiOiJaQW1DTFhwNm9zZGxxUWJpRDgxN3c4Vmc5MENGam9xelFidnM1YnlPbEUwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNzdmNTUxZC0wMzU0LTQyYjMtYTg0My0zMzNmMWQ2Zjg4MWIiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1oxMkNwU2hEV19Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI1dG5tMWc0a2EwNG1xaWQzMDhxN2JjdDg3ciIsIm9yaWdpbl9qdGkiOiJiODYxMGNjMS1mZDhjLTQ3MTktOTAyOC1hNWNlNjE3ZTk5NjIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4NDc5MDEyLCJleHAiOjE2NTg4NDM3NDMsImlhdCI6MTY1ODg0MDE0MywianRpIjoiNjE2N2FmMGItYzdlZi00M2Y5LWJmOGMtZmViNjQ4ZmI0MGU5IiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.h0YIlnwtvqS47hYwzBQ7LkVoSvAAXpV8YuvWP_849pflA_Lb7Kc8dr87mWpMoJIohWC5IpFCxWWdMbQxYG4h4RTg9YyPp-XN0ppnSZpXzIhWQPiRpu_xg1tp7rf4QsCMR8dy0Yap18CzpZafpTAY0jdnWhxM966TSLvWxJBkBvft_0hMqLa4rbXCdK2rmQwrW5ENwjzSIXNDxmyVuEFNTx0PEH0517z1C5siRq0yyhb7Gps-xSZOsU5vc88IiCesv6uFldSr8z6Y9rLpLK3RiICTY7tHVXwIgcePKVXlYwR1r9RwiG-bHm7a2DjnKi3eJt2nEcO0jNOXPaRhcEw6-A',
            'x-app-origin': 'ims',
            'x-id-token':
              'eyJraWQiOiJQRzdvbCt5am1XZllaVVQ2YU1JT0xyNTBjTDZxblpKRndIZ3lzM0c1WHdvPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiME94c1hoNjB2OHZoTUpBOWRpUDVxQSIsInN1YiI6IjE3N2Y1NTFkLTAzNTQtNDJiMy1hODQzLTMzM2YxZDZmODgxYiIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfWjEyQ3BTaERXX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9aMTJDcFNoRFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6ImI4NjEwY2MxLWZkOGMtNDcxOS05MDI4LWE1Y2U2MTdlOTk2MiIsImF1ZCI6IjV0bm0xZzRrYTA0bXFpZDMwOHE3YmN0ODdyIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY0ODU1MjIzMDUzMSJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTg0NzkwMTIsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODg0Mzc0MywiaWF0IjoxNjU4ODQwMTQzLCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiJhNzZkYzFiZi1mZWQyLTRlYjUtOTBhMy00NDc1YWU5ZDljYWYiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.Esc5fRk4ovapwbMfjoTcN5v3uXHzr9NutsWJt8m2pkOSlTz34Nfjyw7usn6oF4qCoI9xigOqtAswVT86dYFNs_f0KFZn0khb9KY8LCth2mi_Ja-wSSZAgt4A15TjQFL8_rR0YCOT3gT2cl6GPceCXwfC_gMMs2uvtnHzLl7cYFe2yHX0lVoo51RUDhewycVELSdUAxUpqqpUpaR2DcI2XMFq-2Pw5v4OPAjd3wqTocMZFmBWxBjWpoioUhrHuqtOwJ8gxs8hnBxBg4hEl_mrAKrRd2-raukgO7EcXjvSnzxxt8lAuKISZS9tCztXy7VNxosmn99zbDN-hBwSFAumyw',
            'x-refresh-token':
              'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.gvr0B43BUrQL9xshsH5CkzH_fLBurrbFMUDhJmzAJEO5XsGosB6IMMa8crsKv-ZPpXmiMFPm49KKAIlyK2pc2HW6vSXrdZVgk-I6zLnXHBjP-XGirf4d8tBfNThK64PADULEo7J9CHC9XMCW0J6yma8vmGqTO2p2kqMvhskyrgWXRphkZ5InSfdh7P82HCLm9gH193ScIe4Zw11fcRYYPA7gUsRlMYu8HjdlRg2bDVbzyjVGV14XxbXG3CgCEjXntCqskTTbyTtgWbbaEesh6obLAXVG5lMy2fwJVHv3_ulBn5zq41pt9Aiihx8S5xpn5pxYnAwZOumT6BT4FBhdCg.QsfGZN__CvG0tmgv.NstX9JRx_cBYSArbjIF-x2NqHeOcdsxdkPA1s2U3mUmL3UWvJRc9ys6sZ6xgfgZhm0yAFaM25dujujPUyToSVC49WrAzNkgavpjOSEqxZzUmh8vdc1UP2LdvgMW4uNFDyQ3cStqlbUVPWDVN0Gc9Qa5GqzDZbJXTDx17ioqT-m8dqPU34WLZouYlDujxVf3niqcKm_LH_0cHh3i3xYC8FjIusf0ncMqAVOPxZj1sSoEDlABF-cE9LtequMakc1SahF7fDlgV-dQv8K8VbBI5nvYkSMsqP4GvCl5YMs7e7l72N9M-gZzbluai7zCNPjQy516_VqNwWtxd6dtLISHnNtrRa2NoWU0akYcilOoa-1r3HKGlABt3BTssr7E6p-ab0ey-u2baNtV30vQ0iThQ-CBQf6t8dGehavtBGJ8POz-KjRQtOmU8FqSPKiyVdPnv26voFeTucd6jI_NzSu3JgEBEgOAowqicskIKyQ7YpscWmWUG-poW4JyzyBx37_gKOHy63qO8ranHgwFUjbKoL2UvT49UiIMO_S6wLZtNnzukbGg6cg35SO-SYgXKttrIlL5MPR7Avs-56PQul3y-95MOJd3ywnXZzpYEbEo-1-KwjWu-vKYhr-gMusVotWlPk-8JuL9ymuOIZ4e6ObP3kkzWY0KR5UDkBAKZO3wxnRcIkNyaFo9JeUsiYiRPUpdQG1Bqeva9_w2kk4awNcIcKNAiw0WwY6qLirrP2gRuoSWXxowRcQ1pIrSCrcVl2UY8XPzcakLaZPpIW1aNFimaHAU6EsS8wV75RG8GKj30UchU6VdIQoT1tXjSnGBhrcEaOrWdhHvQF0g5i45M120tB4G74UsuLsY4qvtoLcTwchFJi5d3l75KvTxN9VFaxZKdACthPSLNDfDU7O1rRG5JZvOyXbl9t2y_XgNbZLY2yBUmROS4sXxruTKYEEnMvc8kzgZAShQy7aO4OvoPYJwfyYeLSjB3UB0eFVP7qhG8Gkv1CBP2yOYF-LwDKwIkhbl-qy4eNc95MW7Py4IywNdaf7m-cfX89pzpAG6OZg32zKl8lj7btTwwmSIrmABCAwCT4H89FCNcOVtkiQiKAqUzEzawex94paMjUBbQm82PhPOmso1YOUantmIxY8U7OqYpvD1LwUpd7u7Ksi5_kepQyzQWOFqmqShwHizhT9W02ev8OFVvKm2Jo4NvdKguWSry5WUg5xd6thPHIbqKyhGv7URbWLl2ztDEzaIG-hFqxqjgmvPDyzAJeddox-5gv0WDTlsSR1UyZ1_u3GjKDG0-kqCjYCZ1yCvB.SnEz7gYKjYGf7NcLv8gDmg',
          },
        }
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
