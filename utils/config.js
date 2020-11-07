const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  MONGO_CLUSTER: process.env.MONGO_CLUSTER,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_DEFAULT_DATABASE: process.env.MONGO_DEFAULT_DATABASE,
  MONGO_TEST_DATABASE: process.env.MONGO_TEST_DATABASE,
  PORT: process.env.PORT,
};
