"use strict";

let {User} = require('../models');

module.exports.post = function (req, res) {

    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(function (result) {
        res.json(result);
    });

    console.log(req.body, "req.body");

};