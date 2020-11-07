const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const { message } = error;
  const { data } = error;
  res.status(status).json({
    message,
    data,
  });
});

app.listen(3000);
