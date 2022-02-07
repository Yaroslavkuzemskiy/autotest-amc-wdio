const axios = require('axios');

describe('regressive without log in', () => {

  it('should login with valid credentials', () => {


    axios.get('https://api.chucknorris.io/jokes/random', {
      header: 'accept: application/json'
    })
      .then(function (response) {
        console.log(response.data)
        console.log(response.status)
        expect(response.status).toEqual(200);
      })
      .catch(e => console.log('ошибка запроса ', e))


  });
  
  // xit('111111111111111', async () => {


  //   try {
  //     const response = await axios.get('https://api.chucknorris.io/jokes/random');
  //     await console.log(response.data);
  //   } catch (error) {
  //     await console.error(error);
  //   }


  // });
})