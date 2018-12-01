"use strict";

let {User} = require('../models');

module.exports.get = function (req, res) {

    User.findAll({where: {id: req.params.id}}).then( function(data) {
        let user = data[0];
        res.json(user);
    });

    console.log(req.params.id, 'hoi');

};