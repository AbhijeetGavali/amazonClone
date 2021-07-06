const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  _id:{
    type: String
  },
  productId: [{
    type: String,
    required: true,
    trim: true,
    minlength: 5
  }]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;