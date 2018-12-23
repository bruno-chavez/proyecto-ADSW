"use strict";

let { Admin } = require('../models');
let bcrypt = require('bcrypt');

module.exports.post = function (req, res) {
    if (req.body.key !== 'holaquepasoquepasochao'){
        res.status(403).json('Forbidden Access')
    } else {
        let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        console.log(req.body);
        Admin.create({
            email: req.body.email,
            password: hashedPassword,
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            console.log(err);
            res.json('Email already in use');
        });
    }
};