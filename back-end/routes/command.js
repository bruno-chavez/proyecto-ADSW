"use strict";

let express = require('express');
let router = express.Router();
let cors = require('cors');
let commandController = require('../controllers/commandController');

let app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

/* GET users listing. */
router.post('/', commandController.post);

module.exports = router;