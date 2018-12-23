"use strict";

let {Equipment} = require('../models');
let {User} = require('../models');

module.exports.post = function (req, res) {

    User.findAll({where: {email: req.body.email}}).then( function(user) {
        Equipment.create({
            name: req.body.name,
            size: req.body.size,
            moderatorID: user[0].id,
            owner: user[0].id
        }).then(equipment => {
            equipment.setUsers([user[0].id]).then(() => {
                equipment.getUsers().then(function (relationship) {
                    res.json(relationship);
                });
            });
        });
    });
};