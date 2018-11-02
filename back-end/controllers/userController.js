"use strict";

let {User} = require('../models');

module.exports.list = function (req, res) {
    //let user = db.define('user').build({name:'Gonzalo'});
    //let user = db.import('../models/user.js');
    //console.log(user);
    //const user = User.create({name:'Gonzalo', password:'pass'});
    console.log('henlo u stinky boi');
    res.json({"status" : "success"});
};