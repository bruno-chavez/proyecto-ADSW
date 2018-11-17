"use strict";

let {Command} = require('../models');

module.exports.post = function (req, res) {

    Command.create({
        value:req.body.valor,
        type:req.body.tipo
        }).then(function (result) {
            res.json(result);
    });

    console.log(req.body, "req.body");
    //res.writeHead(200, {'Content-Type': 'application/json'});
};
