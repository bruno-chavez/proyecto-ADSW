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

    Equipment.findAll({where: {moderatorID: req.body.id}}).then(equipment => {
        User.findAll({where: {email : req.body.email}}).then(user =>{
            equipment.setUsers(user[0]).then(() => {
                res.json( user[0].name + ' added to this equipment')
            })
        })
    })
};

/*

.then(relation => {
                    if (relation === null) {
                        availableUsers.push(i);
                        console.log(availableUsers.length, 'promise');
                    }
                })
 */