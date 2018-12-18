"use strict";

let { User } = require('../models');
let bcrypt = require('bcrypt');

module.exports.post = function (req, res) {

    User.findAll({where: {email: req.body.email}}).then( function(user){

        /*console.log(user[0].dataValues.password, 'hash');
        console.log(req.body.email, 'email');
        console.log(req.body.password, 'pass');*/

        if (user[0].dataValues.approved === false) {
            res.json('Usuario no aprobado por administrador');
        } else {
            let compare = bcrypt.compareSync(req.body.password, user[0].dataValues.password);
            if (compare === true) {
                req.session.user = user[0];
                console.log(req.sessionID);
                req.session.access = 'user';
                res.json(user[0]);
            } else {
                res.json('Contraseña incorrecta');
            }
        }
    }).catch(function (err) {
        console.log(err, 'error');
        res.json('Correo no existente');
    });
};