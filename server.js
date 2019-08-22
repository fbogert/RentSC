/*
* Express is a Fast unopinionated web framework
* */
const express = require('express');

const logger = require('morgan');

const app = express();

// Set up debugger for dev purposed
app.use(logger('dev'));

const exphbs = require('express-handlebars');

const firebase = require('firebase/app');

// Use DOTENV to source the enviroment variables
require('dotenv').config();

const { PORT } = process.env;

// // Firebase setup
const firebaseConfig = {
  apiKey: 'AIzaSyCKkB6GGVGTVWKfsx7HbzSEuffTVW5ioMY',
  authDomain: 'rentsc-17c97.firebaseapp.com',
  databaseURL: 'https://rentsc-17c97.firebaseio.com',
  projectId: 'rentsc-17c97',
  storageBucket: 'rentsc-17c97.appspot.com',
  messagingSenderId: '965655206745',
  appId: '1:965655206745:web:671bf1a888df4383'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Body parsing built in express now
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine config
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');


const authHandler = require('./routes/authRout');

app.use('/api/v1', authHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${PORT}`);
});
