"use strict";

let { User } = require('../models');
let bcrypt = require('bcrypt');

module.exports.post = function (req, res) {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    console.log(req.body);
    User.create({
        name: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        moderator: req.body.moderator,
        serial: req.body.serial,
        approved: req.body.approved
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Email already in use');
    });
};