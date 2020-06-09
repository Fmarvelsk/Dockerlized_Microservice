const express = require('express');
const User = require('./register');

const SignupRoute = express.Router();

SignupRoute.post('/signup', (req, res, next) => {
    if(req.body.username && req.body.password && req.body.email){
        var userData ={
            email : req.body.email,
            username : req.body.username,
            password : req.body.password,
            
        }
        User.register(userData, (err, user)=> {
         if (err) {
             return next(err)
           } else {
             return res.redirect('/profile');
           }
 
        })
    } 
 })

 module.exports = SignupRoute;