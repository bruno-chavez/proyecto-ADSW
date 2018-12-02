"use strict";

let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');


router.post('/', userController.post);


router.post('/', userController.post);
module.exports = router;
