const mongoose = require('mongoose')


const paymentSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    userFirstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    userLastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    creditCardNo: {
        type: Number,
        required: true,
        trim: true,
        length: 16
    },
    userExpMonth: {
        type: Number,
        required: true,
        trim: true,
        length: 2
    },
    userExpYear: {
        type: Number,
        required: true,
        trim: true,
        length: 2
    },
    userCVV: {
        type: Number,
        required: true,
        trim: true,
        length: 3
    }
});

const User = mongoose.model('PaymentSchema', paymentSchema);

module.exports = User;