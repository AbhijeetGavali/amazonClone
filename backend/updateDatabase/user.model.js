const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  user_FirstName: {
    type: String,
    required: true
  },
  user_LastName: {
    type: String,
    required: true
  },
  user_Email: {
    type: String,
    required: true
  },
  user_Password: {
    type: String,
    required: true
  }
});


const User = mongoose.model('Userlogin', userSchema);

module.exports = User;