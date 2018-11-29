"use strict";

let express = require('express');
let router = express.Router();
let loginController = require('../controllers/loginController');

router.get('/', loginController.get);

module.exports = router;
