const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userInfo = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3
    },
    password :{
        type : String,
        required : true,
        unique : true,
        minlength : 3
    },
    email : {
        type : String,
        minlength : 10
    }
}, {
    timestamps: true
})

const user = mongoose.model('user', userInfo)

module.exports = user;