"use strict";

let express = require('express');
let router = express.Router();
let cors = require('cors');
let userController = require('../controllers/userController');

let app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

/* GET users listing. */
router.get('/', userController.list);

module.exports = router;
