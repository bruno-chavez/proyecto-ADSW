"use strict";

let express = require('express');
let router = express.Router();
let isAdminController = require('../controllers/isAdminController');

router.post('/', isAdminController.get);

module.exports = router;