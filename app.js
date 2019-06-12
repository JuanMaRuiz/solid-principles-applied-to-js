const express = require('express');
const products = require('./rest-api/api');

const publicServer = express();
const apiServer = express();

const PUBLIC_APP_PORT = 9000;
const API_PORT = 4001;

publicServer.use(express.static('public'));

publicServer.get('/', (req, res) => {
  res.send('index.html');
});

apiServer.get('/products', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(products));
});

apiServer.listen(API_PORT, () => {
  console.log(`App running on http://localhost:${API_PORT}`);
});

publicServer.listen(PUBLIC_APP_PORT, () => {
  console.log(`App running on http://localhost:${PUBLIC_APP_PORT}`);
});
