const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');

const app = express();
mongoose.connect('mongodb://localhost/meanstack_db');

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// router
app.use('/', apiRouter);

// static files
app.use(express.static(path.join(__dirname, '/public/dist')));

app.listen(3000, ()=>{
	console.log('server on port 3000');
});