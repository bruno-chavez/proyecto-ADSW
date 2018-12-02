"use strict";

let {User} = require('../models');

module.exports.get = function (req, res) {

    User.findAll({where: {approved: false}}).then( function(usersList) {
        res.json(usersList);
    });
};