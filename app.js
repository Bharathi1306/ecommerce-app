const express = require('express');
const app = express();
const port = 5000;

const products = [
  { id: 1, name: "Product A", price: 50 },
  { id: 2, name: "Product B", price: 30 },
  { id: 3, name: "Product C", price: 20 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`E-commerce app listening at http://localhost:${port}`);
});
