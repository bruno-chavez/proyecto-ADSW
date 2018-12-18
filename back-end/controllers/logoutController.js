"use strict";


module.exports.get = function (req, res) {
    req.session.destroy();
    res.json('Ha salido de su sesion exitosamente');
};