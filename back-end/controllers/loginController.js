"use strict";

let { User } = require('../models');
let bcrypt = require('bcrypt');

module.exports.post = function (req, res) {

    User.findAll({where: {email: req.body.email}}).then( function(user){

        /*console.log(user[0].dataValues.password, 'hash');
        console.log(req.body.email, 'email');
        console.log(req.body.password, 'pass');*/

        if (user[0].dataValues.approved === false) {
            res.json('User not approved by and administrator');
        } else {
            let compare = bcrypt.compareSync(req.body.password, user[0].dataValues.password);
            if (compare === true) {
                req.session.user = user[0];
                req.session.access = 'user';
                res.json(user[0]);
            } else {
                res.json('Wrong Password');
            }
        }
    }).catch(function (err) {
        console.log(err, 'error');
        res.json('Email doesnt exists');
    });
};