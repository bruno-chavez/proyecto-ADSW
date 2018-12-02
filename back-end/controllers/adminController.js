"use strict";

let {User} = require('../models');

module.exports.get = function (req, res) {

    User.findAll({where: {approved: false}}).then( function(usersList) {
        res.json(usersList);
    });
};

module.exports.post = function (req, res) {

    User.findAll({where: {email: req.body.email}}).then( function(user) {
        user[0].update({
            approved: true
        }).then(() => {});

        res.json(user);
    });
};