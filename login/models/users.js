const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userInfo = new Schema({
   
})

const user = mongoose.model('user', userInfo)

module.exports = user;