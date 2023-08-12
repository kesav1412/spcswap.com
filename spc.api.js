const axios = require('axios');

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

axios.get(url)
  .then(response => {
    const json = response.data;
    parseJson(json);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function parseJson(json) {
  const usdValue = '1 BTC = $ ' + json.bpi.USD.rate;
  const usdRate = parseFloat(json.bpi.USD.rate.replace(',', ''));
  const spcValue = usdRate / 6500;
  `spc = ${spcValue.toFixed(4)} USD`;
}
