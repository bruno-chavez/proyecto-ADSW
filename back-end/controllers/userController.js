"use strict";

let {User} = require('../models');

module.exports.list = function (req, res) {
    //let user = db.define('user').build({name:'Gonzalo'});
    //let user = db.import('../models/user.js');
    //console.log(user);
    //const user = User.create({name:'Gonzalo', password:'pass'});
    //console.log(req.body.name);
    //console.log(req.body.email);
    //console.log(req.body.password);
    console.log(req.body);
    console.log('henlo u stinky boi');

    let user = User.create({name:req.body.name, password:req.body.password, email:req.body.email});
    //User.findAll({where: {name:'bruno'}}).then(users => {console.log(users[0])});

    res.writeHead(200, {'Content-Type': 'application/json'});
};