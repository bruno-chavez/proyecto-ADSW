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
    }).catch(function (err) {
        console.log(err, 'error');
        res.json('el email ya se encuentra ocupado');
    });
};

module.exports.get = function (req, res) {
    console.log(req.params.email);
    let user = User.findAll({where: {email: req.params.email}});
    console.log(user, 'user');
    //console.log(req.params.email, 'hoi email');
    res.json('hoi');

};