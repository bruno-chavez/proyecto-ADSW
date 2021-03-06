"use strict";

let { Admin } = require('../models');
let bcrypt = require('bcrypt');


module.exports.post = function (req, res) {
    Admin.findAll({where: {email: req.body.email}}).then( function(admin){
        /*console.log(admin[0].dataValues.password, 'hash');
        console.log(req.body.email, 'email');
        console.log(req.body.password, 'pass');*/
        let compare = bcrypt.compareSync(req.body.password, admin[0].dataValues.password);
        if (compare === true) {
            req.session.user = admin[0];
            req.session.access = 'admin';
            res.json(admin[0]);
        } else {
            res.json('Wrong Password');
        }
    }).catch(function (err) {
        console.log(err, 'error');
        res.json('This email doesnt exists');
    })
};
