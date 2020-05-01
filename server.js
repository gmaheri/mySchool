const express = require('express');
const nodemon = require('nodemon');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

//Load environment Variables
dotenv.config({path: './config/config.env'});

//Initialize express.
const app = express();

//Enable cors
app.use(cors());

//Enable body-parser
app.use(bodyParser.json());

//Routes
app.use('/', require('./routes/students'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});


