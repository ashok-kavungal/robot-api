const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./utils/config');

const MONGODB_URI = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_CLUSTER}.jowaf.mongodb.net/${config.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint not valid',
  });
});
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const { message } = error;
  const { data } = error;
  res.status(status).json({
    message,
    data,
  });
});

mongoose
  .set('useUnifiedTopology', true)
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true },
  ).then(() => {
    const port = config.PORT || 3000;
    app.listen(port);
    console.log(`API is ready on port :${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
