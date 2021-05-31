const path = require('path');
const express = require('express');
var cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const colors = require('colors');
const morgan = require('morgan');

const connectDB = require('./config/db');
const tasksRouter = require('./routes/tasks.router');

// poruka za request da vidis sta je zvato
const logger = require('./middleware/logger');
app.use(logger);

// database connect

dotenv.config({ path: './config/config.env' });
connectDB();

// helmet
const helmet = require('helmet');
app.use(helmet());

// serve up static files
app.use(express.static('public'));

// parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors for api calls
app.use(cors());
app.use(morgan('tiny'));

//router

app.use('/api/tasks', tasksRouter);

app.get('/', (req, res, next) => {
  res.render('index');
});

// Port

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`connect to port ${port}`.green.bold));
