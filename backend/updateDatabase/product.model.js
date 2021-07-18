const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    shortDetails: {
        type: String,
        required: true,
        trim: true
    },
    longDetails: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    }
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;