const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const session = require('express-session');

const app = express()

const signup = require('./src/signRoute')
require('../login/authenticate')(app);

const mongo = 'mongodb://localhost:27017/marv';
mongoose.connect(mongo, {useNewUrlParser: true,useUnifiedTopology: true})
.then( ()=> {
    console.log('Connected to Database')
})
.catch(Error, (err) => {
    console.log('Error connceting to database', err)
})

app.use('/', signup);

app.use(cookieParser())
app.use(session({ secert : 'library', resave : 'true', saveUninitialized: true}));

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

module.exports = app;