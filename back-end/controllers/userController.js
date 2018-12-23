"use strict";

let { User } = require('../models');

module.exports.post = function (req, res) {
    User.findAll({where: {email: req.body.email}}).then( user => {
        res.json(user);
    })};