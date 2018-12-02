"use strict";

let express = require('express');
let router = express.Router();
let equipmentController = require('../controllers/equipmentController');

router.get('/:id', equipmentController.get);

module.exports = router;