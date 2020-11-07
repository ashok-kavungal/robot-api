const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const robotRoutes = require('./routes/robot');
const Location = require('./models/location');
const config = require('./utils/config');

const MONGODB_URI = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_CLUSTER}.jowaf.mongodb.net/${config.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.json());
app.use('/robot', robotRoutes);
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
  )
  .then(async () => {
    const prevLocation = await Location.currentLocation();
    if (!prevLocation) {
      const defaultLocation = {
        x: 0,
        y: 0,
        angle: 0,
      };
      const location = new Location(defaultLocation);
      await location.save();
    }
    const port = config.PORT || 3000;
    app.listen(port);
    // eslint-disable-next-line no-console
    console.log(`API is ready on port :${port}`);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
