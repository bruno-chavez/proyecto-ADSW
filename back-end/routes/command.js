"use strict";

let express = require('express');
let router = express.Router();
let commandController = require('../controllers/commandController');

router.post('/', commandController.post);

module.exports = router;