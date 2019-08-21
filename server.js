/*
* Express is a Fast unopinionated web framework
* */
const express = require('express');

const app = express();

const exphbs = require('express-handlebars');

const { PORT } = process.env;

// Use DOTENV to source the enviroment variables
require('dotenv').config();

// Body parsing built in express now
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine config
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));

app.use('/api/v1', );

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${PORT}`);
});
