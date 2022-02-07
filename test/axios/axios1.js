const axios = require('axios');
const assert = require('assert');

describe('regressive without log in', () => {

 

//   it('can intercept a simple GET request', () => {
//       
//           const output = browser.call(() => {
//             return axios.get('https://api.chucknorris.io/jokes/random',{ 
//               header: 'accept: application/json'
//             });
//           })
//           //const response = axios.get('https://api.chucknorris.io/jokes/random');
//          console.log('muuuu',output);
//         // console.log('Output ' + JSON.stringify(response))
//         // console.log('Output ' + response.data)
//     //      for(let key in output) {
//     //       console.log(key + ":", output[key]);
//     //     }
//     //     console.log('muuuu' + output.status);
//     //     expect(output.status).toEqual(200);
//         });
//   xit('should login with valid credentials', async() => {


//     const responce = await axios.get('https://api.chucknorris.io/jokes/random', {
//       header: 'accept: application/json'
//     })
//     console.log('222 2222', responce.data.value)



//      console.log("atata1");
//  });

 
  xit('111111111111111', async () => {


    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
       console.log(response.data);
    } catch (error) {
       console.error(error);
    }


  });
  xit('111111111111111', async () => {


    async function my() {
      const response = await axios.options('https://api.chucknorris.io/jokes/random');
      //const body = JSON.stringify(response.data)
    console.log('ffffffff',response.headers.allow)
   
    
   }
     

 await my()
  });
  

  xit('api', async () => {
      const id = 2; 
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      const body = JSON.stringify(response.data)
    console.log(response.data.data.id)
    //console.log('ffffffff', body)
    asert(id === response.data.data.id,  `Expected id to be ${id}`)
   
     
  });

  xit('ringboost ', async () => {
    const token = "QTmbKwV1mWXJ0SGWbq0zLZBeJdySDjin1npZ4OnCZqNyrsxcQjbcc29LEqLcz8rL"
    const options = {
      method: 'get',
      headers: { Authorization: `Bearer ${token}` },
      
      url: 'https://partner.ringboost-stage.bigdropinc.net/local'
    };
    const response = await axios(options);
    let j = 0
    
  //console.log(response.data.items.length)
  for (i=0; i < response.data.items.length; i++ ) {
  console.log(response.data.items[i].categories)
   j ++
  }
 
  //console.log(response1)
  console.log(j)
  console.log(response.data.items[1])
  
 
   
});

xit('ringboost ', async () => {
  const token = "QTmbKwV1mWXJ0SGWbq0zLZBeJdySDjin1npZ4OnCZqNyrsxcQjbcc29LEqLcz8rL"
  const options = {
    method: 'get',
    headers: { Authorization: `Bearer ${token}` },
    
    url: 'https://partner.ringboost-stage.bigdropinc.net/local'
  };
  const response = await axios(options);
  
  
  //response.data.items.forEach(item => console.log(item.call_for_price))
  //response.data.items.forEach(item => console.log(item))
  response.data.items.forEach(function(number, i, arr) {
    console.log( number.price + " : " + i );
    
  });
 
});

it('ringboost login', async () => {
  
  const response = await axios.post('https://ringboost-dev.bigdropinc.net/admin/api/login', {
    email: 'admin@admin.com',
    password: 'adminadmin'
  })
  expect(response.status).toEqual(200)
  console.log("22222 ", response.data.success )
  console.log( response.status )
 
});
xit('222222222', async () => {
  await browser.url('https://optimummobilestg.prod.acquia-sites.com/mobile/plan')
  browser.setTimeout({
    'pageLoad': 10000,
    'script': 90000});
    browser.maximizeWindow()
// await browser.pause(5000)
// const userListMock = await axios.interceptors.response
//  console.log('2222', userListMock)
const mock = await browser.mock('https://ecom-ppd.optimummobile.com/mobile/graphql*')
console.log("2223", mock)
await expect(mock).toBeRequested()
});

});

