import * as faker from 'faker/locale/en_US'; 
import http from 'k6/http';

export const addProduct = async (baseUrl) => {
    const productData = {
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        stock: 10000,
        image: faker.image.food(),
        unit_price: faker.commerce.price(100)
    }
   const data = http.post(`${baseUrl}/product`, JSON.stringify(productData), {
    headers: { 'Content-Type': 'application/json' },
   });
   const newProduct = JSON.parse(data.body);
   const { body: product } = http.get(`${baseUrl}/product/${newProduct.id}`);
}

