"use strict";

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');

let indexRouter = require('./routes/index');
let userRouter = require('./routes/users');
let commandRouter = require('./routes/command');
//let historyRouter = require('./routes/history');
let registerRouter = require('./routes/register');
let loginRouter = require('./routes/login');
let moderatorRouter = require('./routes/moderator');
let createEquipmentRouter = require('./routes/createEquipment');
let equipmentRouter = require('./routes/equipment');
let adminRouter = require('./routes/admin');
let adminLoginRouter = require('./routes/adminLogin');
let logoutRouter = require('./routes/logout');
let sessionRouter = require('./routes/session');
let adminRegisterRouter = require('./routes/adminRegister');
let equipmentInfoRouter = require('./routes/equipmentInfo');

let cors = require('cors');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({origin: ["http://localhost:4200"], credentials: true}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/command', commandRouter);
//app.use('/history', historyRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/moderator', moderatorRouter);
app.use('/create', createEquipmentRouter);
app.use('/equipment', equipmentRouter);
app.use('/admin', adminRouter);
app.use('/adminlogin', adminLoginRouter);
app.use('/logout', logoutRouter);
app.use('/session', sessionRouter);
app.use('/adminregister', adminRegisterRouter);
app.use('/equipmentinfo', equipmentInfoRouter);

module.exports = app;
