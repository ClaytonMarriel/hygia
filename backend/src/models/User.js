const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  city: String,
  country: String,
  postalCode: Number
})
module.exports = mongoose.model('User', UserSchema)