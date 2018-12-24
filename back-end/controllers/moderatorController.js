"use strict";

let {User} = require('../models');

module.exports.get = function (req, res) {
    User.findAll({where: {id: req.session.user.id}}).then(user => {
        user[0].getEquipment().then(equipment => {
            equipment.getUsers().then(users => {
                res.json(users);
            })
        })
    })
};

module.exports.post = function (req, res) {

    User.findAll({where: {id: req.session.user.id}}).then( function(moderator) {
        User.findAll({where: {id: req.params.user}}).then( function(user) {

            moderator[0].update({ moderator: false }).then(() => {});
            user[0].update({moderator: true}).then(() => {});
            res.json('Moderator switched correctly ');
        });
    });
};
