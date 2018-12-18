"use strict";

let {Command} = require('../models');

module.exports.post = function (req, res) {

    Command.create({
        value: req.body.valor,
        unit: req.body.unidad,
        device: req.body.dispositivo,
        function: req.body.funcion
        }).then(function (result) {
            console.log(req.sessionID);
            res.json(result);
    });
};
