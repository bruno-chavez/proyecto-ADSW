"use strict";

let express = require('express');
let router = express.Router();
let adminController = require('../controllers/adminController');

router.get('/:id', adminController.get);

module.exports = router;