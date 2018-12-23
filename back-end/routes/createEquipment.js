"use strict";

let express = require('express');
let router = express.Router();
let createEquipmentController = require('../controllers/createEquipmentController');

router.post('/', createEquipmentController.post);

module.exports = router;