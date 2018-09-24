"use strict";

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../front-end/dist/proyecto-ADSW')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
app.listen(3000,()=>{
	console.log('server on port 3000');
});