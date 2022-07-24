import http from 'k6/http';
import { sleep } from 'k6';

export const orderProduct = async (baseUrl) => {
    const orderData = {
        productId: 1,
        userId: 1,
        quantity: 1
    }
   const data = http.post(`${baseUrl}/orders`, JSON.stringify(orderData), {
    headers: { 'Content-Type': 'application/json' },
    timeout: "360s"
   });
   const newOrder = JSON.parse(data.body);
   http.get(`${baseUrl}/orders/${newOrder.id}`, {
    timeout: "360s"
   });
   sleep(1);
}

