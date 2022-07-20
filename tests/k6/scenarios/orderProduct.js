import http from 'k6/http';

export const orderProduct = async (baseUrl) => {
    const orderData = {
        productId: Math.round(Math.random() * 100),
        userId: Math.round(Math.random() * 10),
        quantity: Math.round(Math.random() * 10)
    }
   const data = http.post(`${baseUrl}/orders`, JSON.stringify(orderData), {
    headers: { 'Content-Type': 'application/json' },
   });
   const newOrder = JSON.parse(data.body);
   const order = http.get(`${baseUrl}/orders/${newOrder.id}`);
}

