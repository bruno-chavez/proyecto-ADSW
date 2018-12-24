"use strict";

let {User} = require('../models');

module.exports.get = function (req, res) {
    User.findAll({where: {id: req.session.user.id}}).then(user => {
        user[0].getEquipment().then(equipment => {
            res.json(equipment);
        }).catch(err =>{
            res.json(err);
        })
    })
};