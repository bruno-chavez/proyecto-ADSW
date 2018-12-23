"use strict";

let express = require('express');
let router = express.Router();
let moderatorController = require('../controllers/moderatorController');

router.get('/:user', moderatorController.get);

module.exports = router;