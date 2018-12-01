"use strict";

let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

//router.post('/', userController.list);

router.post('/', function(req, res){
  userController.list
});

module.exports = router;
