const mongoose = require('mongoose')

const NoticeSchema = new mongoose.Schema({
   name: String,
   author: String,
})
module.exports = mongoose.model('Notice', NoticeSchema)