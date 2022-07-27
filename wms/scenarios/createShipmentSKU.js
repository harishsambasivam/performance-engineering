import { sleep, group } from 'k6'
import http from 'k6/http'
export default function scenario_1() {
  let response

  group('page_1 - https://wms.byjusorders.com/manage-sku/shipment-skus/create', function () {
    response = http.post(
      'https://nucleus.byjusorders.com/nucleusapi/ordermanagement/shipmentskus/create',
      '{"skuId":"k6 testing","skuName":"k6 testing 2","type":"sd_card","status":"active","updatedBy":"","productionStrategy":"","financeMaterialCode":"k6 testing","financeProductCode":"k6 testing","subCategory":"sales","createdAt":"","updatedAt":"","properties":{"board":"CBSE","grade":"06-06","appVersion":"k6 testing","sdCardVersion":"k6 testing","sdCardMemory":"16","noOfGrade":"","apkRelease":"2022-07-21","contentRelease":"2022-07-21","inventoryRelease":null,"manufacturer":"k6 testing","brand":"k6 testing","memory":null,"course":"GATE","model":"","scheme":"","programId":"k6 testing","userType":"","language":"english","subject":"k6 testing","skuSet":null,"commodity":"","content":"","k6 testing":"k6 testing","combinations":["06-06"],"comboDetails":{"initialClass":"6","finalClass":"6","updatedBy":"kirti.sharma3@byjus.com","createdAt":"2022-07-25T17:55:45.313Z"}}}',
      {
        headers: {
          'content-type': 'application/json',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-access-token':
            'eyJraWQiOiJRdEZqTFhpWFd0OFhMNFZwVE9rVTRrTlR5d2ZXZWJVN2VUR29LK1R4M1VJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiMzVmNmNhOS0yZDA1LTQ1ZDItOGViNC1lOThiNzFiM2EzNjciLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX0NiQ2Y3U01TSF9Hb29nbGUiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9DYkNmN1NNU0giLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI0OWo3OTVyMjBvMmQ5OXZoYjQwNjVvczlscyIsIm9yaWdpbl9qdGkiOiIyMjQxNTE4My01ODI0LTRmMmUtYTI4Ny0wNDhjYjU3ZGRkZDciLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU4MTQ4NDM2LCJleHAiOjE2NTg3NzQ4NDEsImlhdCI6MTY1ODc3MTI0MSwianRpIjoiMzNjM2U2NTctYjQ3MS00NTc3LTlmZTQtNzkwZjhjN2ZmY2E2IiwidXNlcm5hbWUiOiJHb29nbGVfMTA2MzUyNTkzMTY0NTI0NTA3MjI5In0.bIEQD5xiholIhyoeVIEjsraDDhCTaJM0HDIiRMdFbflg61KnpbYSJnwtKjuEhGrsXsnOyPYnVhjJqrZkVnbRzQRwfli-QvHhmzr6Y8ZQasjtjDoAnignJuEi79zGb0BIjbu5Bw4IIBqRkOP7R7E9p9ESaT_WxXOnbo4JqEo1tHr79qR2l88WeL2TvouSfBViPLbXkOxJkCMrtXi5ZVEzWx2btMmAtlF_r8yifZSFwM7IymRbexzYuODNi0X_WqIEpBHOzvLeW086toVxmmNPKfFwvjF-CLX7h_XA6Lt1s7k5Qp5yHUHVe6_AhjeAsCNPTHo-NdR8ac8JnvTC6kidgg',
          'x-app-origin': 'ims',
          'x-id-token':
            'eyJraWQiOiJ0N2t3bEhyamc1QWk1M0V3UVhTeW9wTDlVUktGWE1DVThNZHJIRmFZQWN3PSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiYlVLcjNoRGp2akF1dWdkSld6ZlZEZyIsInN1YiI6ImIzNWY2Y2E5LTJkMDUtNDVkMi04ZWI0LWU5OGI3MWIzYTM2NyIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfQ2JDZjdTTVNIX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9DYkNmN1NNU0giLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwNjM1MjU5MzE2NDUyNDUwNzIyOSIsImdpdmVuX25hbWUiOiJIYXJpc2giLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FJdGJ2bWw0TWhPRlhZYnZZNmtzZU5HY3dfQWF6VXpPQlFVR2FYQzNmYVFBPXM5Ni1jIiwib3JpZ2luX2p0aSI6IjIyNDE1MTgzLTU4MjQtNGYyZS1hMjg3LTA0OGNiNTdkZGRkNyIsImF1ZCI6IjQ5ajc5NXIyMG8yZDk5dmhiNDA2NW9zOWxzIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTA2MzUyNTkzMTY0NTI0NTA3MjI5IiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTY1NDg1NDgzMzI0MCJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTgxNDg0MzYsIm5hbWUiOiJIYXJpc2ggU2FtYmFzaXZhbSIsImV4cCI6MTY1ODc3NDg0MSwiaWF0IjoxNjU4NzcxMjQxLCJmYW1pbHlfbmFtZSI6IlNhbWJhc2l2YW0iLCJqdGkiOiI2MmFjN2RhOC1iYWEzLTQyMDEtOWJiYy1kYWRhOGY0N2M0N2MiLCJlbWFpbCI6ImhhcmlzaC5zYW1iYXNpdmFtQGJ5anVzLmNvbSJ9.LdOLeAYI4Y5XExYlHPqLHm2HynlloB3MpDpZam_eyn3Ke2OD7ogMg2e0VAu8S0hDniFStD3FDQmtBza1UZFFczaKQWq_IEDPq0eYtA-k3mWRPbOxosR1PHDepkN36-rb1KElqrYKon38VSgtkobPHLhJXWM3vzQ0OxosgOYS4IDgjDakrY9fopV_4krp1eDvR5KzR2dnPkX3lxQuItVBnKyVccNdIA2n_QiVye3K__hLAYynQESQ9MCyCr8_0wk9IzKCLmZq9X-WV7RYt8xhHvT_4wejpmGUqTwVKL55QGSKmoEkebhMo5yIQrA5XKjMkvzCHH35OJ2O_5CIhUUF2A',
          'x-impersonated': 'true',
          'x-impersonated-email': 'kirti.sharma3@byjus.com',
          'x-refresh-token':
            'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.wFCRnUbfugfrIMoeVYdEAIlBmpwZ2OR0g9tSskpOz3vn6RW6NtJmNFdyihvSXohqojFAJcxTfAaTTknZLTWDgccSaGqFYdj3k3iI_AAbSPR_2aEGwcPPHvIHsuDMnwLj0F89Unde7gLrw5_QhLdEZQ67aNwqlhiBZvNEdVSRwMdGB-IMAsseHDkoxa9mSLhFGRBoqmOGMrW95ZFlLOw2Fbgd5Id6wZ4pWEP-BFfo5o1MpIPEPt5VJyfm9bif4Z8ZzfFNqwd39-M8YyO4HNI1z7Gzw6OB5vkithsNSTPSxcxV5TgRTbmwaVnFBZMfirgH7UCFSo0b06wsnOuZ48QhpQ.z-JpBzoCxw3MwtVj.jHe5IPo0F5uMN46V1zqfy0mivThbxn5qC0soh4KU630on47X0NT6wmslkPKAXGkhdwwpwTGxs-hYUdBuh9fyWrojsFrw9Fw_-0E3ErvTo-T4V5EVULyrQf3XqsiEzHOh7FksFLe4lWru1vQAdjVVgf6dxlLDsAk79IluBSbuG9XOh9Phh_VRKO2PGwP1m1B4HTHV2SY218B3rppMh66uqFrHfsPhQcwxM-smtR_nNfk-w2_vIfeEeo5LUS0ez88yp0HmRD5BJCUlURj66I-8FAxF01_gW1NbY_RHu_qXRbZHCXP4gZTkThUjr03faoOW3ofyaoyQAA-mz7jpkQjFisTtONvpm0AOF-CtHd1Z7xjSeOyuyGSuJVhaOemDVVW9-GIu5-8Dm0lwNXbJlXDUz709zd6ZHtz7H2HqlXKRtwMduxnY2yS5qu9Kuo5Q8eN578awFkBsMWmejqn-BYUV-WKxYTPmOrnyT_9pNpsnni1awFelvaA5GpUvu5uT-ieX07I9cGSAh-7zJsy9yDv0pGvVRXMMEuBmYBu5I2lwyxh8Fn6Om-9Qk3DgCcZVkSUcfOrVawhK7G4Qq_cFYrrpiThy9Q9YJUX0NRy2MQktyyi8ZT-KZ-SLZg4T5e7ML6_zwYMMCTnsFvZLXG3WHQ7AXUBGvV7WajbJpiBCgsz2E7Bnm3L8Zm9WpW-mKhg9Dnbu5eQwu2e9YsTt-3rV-KMIjMYWaTaaUlxowpuZ7HpIm0mxawnHSgKbpvS18F1AbfA69YW4pRSKc9Pvl6-UICZ7S_GWjgl3G2cmEBl8PSrah2Tz3lTQ4UtiBEoVRkzaF9hbXcVX4cPs14DImd__8tkxA_bMNx62qYeh0vBXAZr1pAfuoW6HsPYkt8ReAhY3u3FxTH0F1KPla0lfMht0vNDW6WJEpQrMX8M9LB5w-DknmCgaqb1yXmuw-HAUFs4v5ip6WsInhInTPPO9ugy4pbdSqqHTJbOS_rJMn7GMu5LIV41hpm7NO9dCBL5MfiejB9znmK5MCriNeJ1r9v3-lD87StqAOQxe7dz02Aahyt8nXHFCDvzanPwfgaOE__7WzFIupWEUi4eti8leKpYSnHojhbSyQWNLAJeoj1jQMJfurH2sNDIv9i3tedIpkUxmlnRUajTB6zmV1EWFYE_cylRJcLmnVLIm0kcw2PZOfMrFdzG8g5DzBhHhHPLAiNdTU32DugdqYojGQJa5q_sL4zK2AyAZBmlRsgAR4-NctIRySy8wUfBDEM3n2nex_FJkOIogHZfZgpFAGSDHz3C_F0bHFLoHmTJ5fWFV.Gj_fmEi9FR3jRmmtUKCIFQ',
        },
      }
    )
    sleep(1.3)
  })

  console.log(response);

}
