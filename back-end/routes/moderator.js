"use strict";

let express = require('express');
let router = express.Router();
let moderatorController = require('../controllers/moderatorController');

router.get('/', moderatorController.get);
router.post('/', moderatorController.post);


module.exports = router;