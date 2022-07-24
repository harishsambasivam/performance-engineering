import * as faker from 'faker/locale/en_US'; 
import http from 'k6/http';

export const signUp = async (baseUrl) => {
    const userData = {
        username: faker.name.findName(),
        password: faker.random.alphaNumeric(Math.random() * 10),
        address: faker.address.secondaryAddress()
    }

    let params = {
        timeout: '240s'
      };
      
   const data = await http.post(`${baseUrl}/user`, JSON.stringify(userData), {
    headers: { 'Content-Type': 'application/json' },
    timeout: '240s'
   });
   
   const { data: newUser } = JSON.parse(data.body);
   const { body: user } = http.get(`${baseUrl}/user/${newUser.username}`, params);
}

