const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number
});

const Product = mongoose.model('Product', productSchema);

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
