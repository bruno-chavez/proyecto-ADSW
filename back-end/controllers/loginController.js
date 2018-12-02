"use strict";

let { User } = require('../models');
let bcrypt = require('bcrypt');


module.exports.post = function (req, res) {

    User.findAll({where: {email: req.body.email}}).then( function(user){

        console.log(user[0].dataValues.password, 'hash');
        console.log(req.body.email, 'email');
        console.log(req.body.password, 'pass');

        let compare = bcrypt.compareSync(req.body.password, user[0].dataValues.password);
        if (compare === true) {
            res.json(user[0]);
        } else {
            res.json('Acceso denegado');
        }
    }).catch(function (err) {
        console.log(err, 'error');
        res.json('login rechazado');
    });

};