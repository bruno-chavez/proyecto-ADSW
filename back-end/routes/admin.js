"use strict";

let express = require('express');
let router = express.Router();
let adminController = require('../controllers/adminController');

router.get('/', adminController.get);

router.post('/', adminController.post);

router.delete('/:id', adminController.delete);

module.exports = router;