var express = require('express');
var router = express.Router();

let products = [
  {"name": "Product A", "price": 30, "id": "id_A" },
  {"name": "Product B", "price": 50, "id": "id_B" },
];

router.get('/', function(req, res, next) {
  res.json(products);
});

// Allows adding a new product via POST request
router.post('/add_product', function(req, res, next) {
  // request is in JSON format parsed by express.json() middleware in app.js
  let newProduct = req.body;
  products.push(newProduct);
  res.json({ message: 'Product added successfully', product: newProduct });
});

router.get('/electric_products', function(req, res, next) {
  res.json({ electric_products: ['Electric product 1', 'Electric products 2'] });
});

router.get('/electric_products/shaver', function(req, res, next) {
  res.json({ shaver: ['Shaver 1'] });
});

module.exports = router;

