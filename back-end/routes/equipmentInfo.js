"use strict";

let express = require('express');
let router = express.Router();
let equipmentInfoController = require('../controllers/equipmentInfo');

router.get('/', equipmentInfoController.get);

module.exports = router;