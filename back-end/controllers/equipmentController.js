"use strict";

let {Equipment} = require('../models');
let {User} = require('../models');

module.exports.get = function (req, res) {
    let availableUsers = [];

    User.findAll({where: {approved: true}}).then( users => {
        if (users.length === 0) {
            res.json('No users available');
        } else {
            for (let i of users){
                let promise = i.getEquipment();
                if (promise._bitField !== 0) {
                    availableUsers.push(i)
                }
            }
        }
        res.json(availableUsers)
    });
};

module.exports.post = function (req, res) {
    Equipment.findAll({where: {moderatorID: req.session.user.id}}).then(equipment => {
        User.findAll({where: {email : req.body.email}}).then(user =>{
            console.log(equipment[0]);
            equipment[0].getUsers().then(users => {
                equipment[0].addUser(user[0].id).then(() => {
                    res.json( user[0].name + ' added to this equipment')
                })

            })
        })
    })
};