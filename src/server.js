'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

app.use(logger);
app.get('/person', validator, (request, response) => {
  response.json({
    name: request.query.name,
  });
});

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('App is running on port :: ' + port);
    });
  },
  app,
};