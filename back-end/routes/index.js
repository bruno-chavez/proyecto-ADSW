"use strict";

let express = require('express');
let router = express.Router();
let cors = require('cors');

let app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

module.exports = router;
