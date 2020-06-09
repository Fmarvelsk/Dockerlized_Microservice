const express= require('express');
const passport = require('passport');

const AuthRoute = express.Router()

AuthRoute.get('/', (req,res) => {
    res.send('hello')
})

AuthRoute.get('/login', (req,res) => {
    res.send()
})

AuthRoute.post('/login', 
passport.authenticate('local', {successRedirect : '/', failureRedirect : '/login'}),
(req, res) => { 
    res.redirect('/')
})

module.exports = AuthRoute;