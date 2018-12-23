"use strict";

let express = require('express');
let router = express.Router();
let equipmentController = require('../controllers/equipmentController');

router.post('/', equipmentController.post);
router.get('/', equipmentController.get);

module.exports = router;