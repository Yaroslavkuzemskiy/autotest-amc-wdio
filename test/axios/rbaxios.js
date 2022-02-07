const axios = require('axios');
const assert = require('assert');
var Base64 = require('base-64');

describe('Bandwidth', () => {
    
      it('Bandwidth', async () => {
        const tok = 'rboost:Stevemuoio4949';
        const hash = Base64.encode(tok);
        const Basic = 'Basic ' + hash;
        console.log(Basic)
        const response = await axios.get('https://dashboard.bandwidth.com/api', {headers : { 'Authorization' : Basic }})
        
        expect(response.status).toEqual(200)
      });

      it('Bandwidth1', async () => {
        const usernamePasswordBuffer = Buffer.from('rboost:Stevemuoio4949');
        const base64data = usernamePasswordBuffer.toString('base64');
        const axiosObject = axios.create({
         headers: {
            'Content-Type': 'application/json',
             'Authorization': `Basic ${base64data}`
    }})
      
      const response = await axios.get('https://dashboard.bandwidth.com/api', {headers : { 'Authorization' : axiosObject.defaults.headers.Authorization }})
      console.log(response.status)
      });
});

