/**
 *  @fileOverview index page and sever set up
 *
 *  @author       Haiping Xue
 *
 *  @requires     NPM:express
 *  @requires     NPM:body-parser
 */

 /**
  * for app
  *
  * @type {Module}
  */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there' });
});

// for Heroku deployment
const PORT = process.env.PORT || 8083;
app.listen(PORT);
