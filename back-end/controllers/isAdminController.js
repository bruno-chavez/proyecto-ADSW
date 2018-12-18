"use strict";

module.exports.get = function (req, res) {
    if (req.session.access === 'user'){
        res.json('user');
    }

    if (req.session.access === 'admin'){
        res.json('admin');
    } else {
        res.json('guest');
    }
};