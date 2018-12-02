"use strict";

let {Equipment} = require('../models');
let {User} = require('../models');

module.exports.get = function (req, res) {

    Equipment.create({
        name: 'nombre',
        moderatorID: req.params.id,
        owner: req.params.id,
    }).then(function (result) {
        User.findAll({where: {email: 'q@q.q'}}).then( function(data) {
            result.setUsers([data[0].id]).then(() => {
                console.log(result.getUsers().then(tables =>{
                    console.log(tables, 'hoi');
                    res.json(tables );
                }));
            });
        });
    /*Equipment.findAll({where: {id: req.params.id}}).then( function(data) {
        let user = data[0];

        console.log(user, 'hoi');
        res.json(user);
    });*/
    })};