const express = require('express');
const exphbs  = require('express-handlebars');
const nodemon = require('nodemon');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

// Load environment Variables
dotenv.config({path: './config/config.env'});

// connect DB
connectDB();

// Initialize express.
const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Enable cors
app.use(cors());

// Body-parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routes
app.use('/', require('./routes/students'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});


