const express = require('express');
const resetPassword = require('../../register/src/register')

const PasswordRoute = express.Router();

PasswordRoute.put('/resetPassword/:id', (req, res, next) => {
    resetPassword.findByIdAndUpdate(req.params.id,
        {
            $set: {
                password: req.body.password
            }  
          })
    .then(data => res.json(data))
    .catch(err => next(err))
} )

module.exports = PasswordRoute;