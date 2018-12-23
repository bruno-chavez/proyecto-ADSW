"use strict";

let { User } = require('../models');

module.exports.post = function (req, res) {
    User.findAll({where: {serial: req.body.serial}}).then( user => {
        res.json(user[0]);
    })};