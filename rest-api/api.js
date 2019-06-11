const app = require('express')();

const PORT = 4001;

const products = [
  {
    "id":1,
    "description": "Star Wars Lego Ship"
  },
  {
    "id":2,
    "description": "Barbie Doll"
  },
  {
    "id":3,
    "description": "Remote Control Airplane"
  },
];

app.get('/products', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(products);
});

app.listen(PORT, () => {
  console.log(`API running on ${PORT}`);
});
