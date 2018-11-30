"use strict";

let {Command} = require('../models');

module.exports.post = function (req, res) {

    Command.create({
        value: req.body.valor,
        type: req.body.tipo,
        device: req.body.dispositivo,
        function: req.body.funcion
        }).then(function (result) {
            res.json(result);
    });
};
