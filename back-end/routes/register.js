"use strict";

let express = require('express');
let router = express.Router();
let registerController = require('../controllers/registerController');

router.post('/', registerController.post);

router.get('/:email', registerController.get);

module.exports = router;
