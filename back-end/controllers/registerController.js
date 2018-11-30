"use strict";

let { User } = require('../models');

module.exports.post = function (req, res) {
    User.create({
        name: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        moderator: req.body.moderator,
        serial: req.body.serial,
        approved: req.body.approved
    }).then(function (result) {
        res.json(result);
    });
};

module.exports.get = function (req, res) {
    console.log(req.params.email, 'hoi email');
    res.json('hoi');

};