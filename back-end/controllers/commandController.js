"use strict";

let {Command} = require('../models');

module.exports.post = function (req, res) {

    Command.create({
        value:req.body.valor,
        type:req.body.tipo
        });

    console.log(req.body, "req.body");
    res.writeHead(200, {'Content-Type': 'application/json'});
};
