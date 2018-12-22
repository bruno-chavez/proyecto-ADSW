"use strict";

let {Equipment} = require('../models');
let {User} = require('../models');

module.exports.post = function (req, res) {
    Equipment.create({
            name: req.body.name,
            moderatorID: req.body.id,
            owner: req.body.id,
            size: req.body.size,
    }).then(function (equipment) {
        User.findAll({where: {email: req.session.user.email}}).then( function(user) {
        equipment.setUsers([user[0].id]).then(() => {
            equipment.getUsers().then(function (relationship) {
                res.json(relationship);
            });
        });
    });});
};