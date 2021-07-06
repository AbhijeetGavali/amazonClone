const mongoose = require('mongoose')

const shppingDetailsSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    userAddress: {
        type: String,
        required: true,
        trim: true,
        minlength: 12
    },
    userCity: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    userState: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    userPinCode: {
        type: Number,
        required: true,
        trim: true,
        minlength: 8
    },
    userCountry: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    userNumber: {
        type: Number,
        required: true,
        trim: true,
        length: 10
    }
});

const Shipping = mongoose.model('Shipping', shppingDetailsSchema);

module.exports = Shipping;