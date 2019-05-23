'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  _id: { type: Number }
});

module.exports = mongoose.model('products', products);
