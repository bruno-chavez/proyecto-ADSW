"use strict";

let {Command} = require('../models');

module.exports.post = function (req, res) {

    console.log(req.body);

    let command = Command.create({value:req.body.value, type:req.body.type});

    res.json({"status" : "success"});
    Command.findAll({where: {value:'50'}}).then(users => {console.log(users[0])});

    console.log(command.body);
};
