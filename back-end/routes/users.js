"use strict";

let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.list);

module.exports = router;
