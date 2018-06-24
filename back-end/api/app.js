"use strict";


const express = require('express');
const bodyParser = require('body-parser');

//routes
const getEmployees = require('./routes/get/employees');
const getItems = require('./routes/get/items');
const getModels = require('./routes/get/models');
const getImgOfModel = require('./routes/get/imgOfModel');
const getTransaction = require('./routes/get/transactions');
const getCategory = require('./routes/get/category');
const getModelsByCategory = require('./routes/get/modelsByCategory');
const getItemsByModel = require('./routes/get/itemsByModel');
const getReservation = require('./routes/get/getReservation');
const getgetItems = require('./routes/get/getitems');

const postRegister = require('./routes/post/register');
const postLogin = require('./routes/post/login');
const postReservation = require('./routes/post/reservation');
const postMakeTransaction = require('./routes/post/makeTransaction');
const postEndTransaction = require('./routes/post/endTransaction');

const PORT = 3000;

const app = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/get/employees', getEmployees);
app.use('/get/items', getItems);
app.use('/get/models', getModels);
app.use('/get/category', getCategory);
app.use('/get/imgOfModel', getImgOfModel);
app.use('/get/transactions', getTransaction);
app.use('/get/modelsByCategory', getModelsByCategory);
app.use('/get/itemsByModel', getItemsByModel);
app.use('/get/getReservation', getReservation);
app.use('/get/getitems', getgetItems);

app.use('/post/register', postRegister);
app.use('/post/login', postLogin);
app.use('/post/reservation', postReservation);
app.use('/post/makeTransaction', postMakeTransaction);
app.use('/post/endTransaction', postEndTransaction);



app.listen(PORT, () => {
    console.log(`Banch of Tools API is now running on port ${PORT}.`);
});