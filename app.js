const express = require('express');
const path = require('path');
const app = express();

const PORT = 9000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('index.html');
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
