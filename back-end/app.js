"use strict";

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
//let userRouter = require('./routes/users');
let commandRouter = require('./routes/command');
//let historyRouter = require('./routes/history');
let registerRouter = require('./routes/register');
let loginRouter = require('./routes/login');
let moderatorRouter = require('./routes/moderator');
let equipmentRouter = require('./routes/equipment');
let adminRouter = require('./routes/admin');



let cors = require('cors');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
//app.use('/user', userRouter);
app.use('/command', commandRouter);
//app.use('/history', historyRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/moderator', moderatorRouter);
app.use('/equipment', equipmentRouter);
app.use('/admin', adminRouter);



module.exports = app;
