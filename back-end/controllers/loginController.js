"use strict";

let { User } = require('../models');
let bcrypt = require('bcrypt');


module.exports.post = function (req, res) {

    User.findAll({where: {email: req.body.email}}).then( function(data){

        console.log(data[0].dataValues.password, 'hash');
        console.log(req.body.email, 'email');
        console.log(req.body.password, 'pass');

        let compare = bcrypt.compareSync(req.body.password, data[0].dataValues.password);
        if (compare === true) {
            res.json('Acceso autorizado');
        } else {
            res.json('Acceso denegado');
        }
    });

};