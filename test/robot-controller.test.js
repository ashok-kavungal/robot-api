const mongoose = require('mongoose');

const config = require('../utils/config');
const Location = require('../models/location');
const Logs = require('../models/logs');
const RobotController = require('../controllers/robot');

describe('Robot Controller', () => {
  const MONGODB_URI = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_CLUSTER}.jowaf.mongodb.net/${config.MONGO_TEST_DATABASE}?retryWrites=true&w=majority`;
  beforeAll(async () => {
    await mongoose.set('useUnifiedTopology', true).connect(MONGODB_URI, {
      useNewUrlParser: true,
    });
    const defaultLocation = {
      x: 0,
      y: 0,
      angle: 0,
    };
    const location = new Location(defaultLocation);
    await location.save();
  });

  it('postNextLocation controller should save log and location to db', async () => {
    const req = {
      body: {
        command: 'right',
        stepsize: 10,
      },
    };
    const res = {
      status() {
        return this;
      },
      json() {},
    };

    const saved = await RobotController.postNextlocation(req, res, () => {});
    expect(saved.log).toHaveProperty('command', 'right');
    expect(saved.log).toHaveProperty('stepsize', 10);
    expect(saved.log).toHaveProperty('time');

    expect(saved.location).toHaveProperty('x');
    expect(saved.location).toHaveProperty('y');
    expect(saved.location).toHaveProperty('time');
  });

  it('postRotateangle controller should save log and location to db', async () => {
    const req = {
      params: {
        command: 'right',
      },
    };
    const res = {
      status() {
        return this;
      },
      json() {},
    };

    const saved = await RobotController.postRotateangle(req, res, () => {});
    expect(saved.log).toHaveProperty('command', 'right');
    expect(saved.log).toHaveProperty('time');

    expect(saved.location).toHaveProperty('x');
    expect(saved.location).toHaveProperty('y');
    expect(saved.location).toHaveProperty('time');
    expect(saved.location).toHaveProperty('angle');
  });

  afterAll(async () => {
    await Logs.deleteMany({});
    await Location.deleteMany({});
    await mongoose.disconnect();
  });
});
