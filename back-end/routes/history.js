"use strict";

let express = require('express');
let router = express.Router();
let historyController = require('../controllers/historyController');

router.get('/:id', historyController.get);

module.exports = router;
