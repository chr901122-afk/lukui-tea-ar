require('dotenv').config();
const ngrok = require('@ngrok/ngrok');

(async function() {
  const listener = await ngrok.forward({
    proto: 'http',
    addr: 3000,
    authtoken: process.env.NGROK_AUTH_TOKEN,
  });
  console.log(`ngrok tunnel established at: ${listener.url}`);
})();