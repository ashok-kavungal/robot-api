const { validationResult } = require('express-validator');

const Logs = require('../models/logs');
const Location = require('../models/location');
const Robot = require('../utils/robot');

// fetches and returns the last location from db
exports.getCurrentlocation = async (req, res, next) => {
  try {
    const prevLocation = await Location.currentLocation();
    res.status(200).json({
      message: 'current location fetched successfully.',
      result: prevLocation,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getAllLogs = async (req, res, next) => {
  try {
    const log = await Logs.find().select('command stepsize angle time -_id');
    res.status(200).json({
      message: 'fetched all logs successfully.',
      result: log,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// add the new command and postion to db
exports.postNextlocation = async (req, res, next) => {
  const saved = {};
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error(
        'stepsize should be numeric and use commands left, right, backward or forward to move the robot',
      );
      error.statusCode = 422;
      throw error;
    }

    const { command } = req.body;
    const { stepsize } = req.body;
    const log = new Logs({
      command,
      stepsize,
    });

    saved.log = await log.save();

    const prevLocation = await Location.currentLocation();
    const newLocation = Robot.move(prevLocation, command, stepsize);
    const location = new Location(newLocation);
    saved.location = await location.save();

    res.status(201).json({
      message: `robot moved ${stepsize} units ${command} successfully!`,
      prevLocation,
      currentLocation: newLocation,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
  return saved;
};

// adds the command  and angle to db
exports.postRotateangle = async (req, res, next) => {
  const saved = {};
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error(
        'Invalid command.use commands left, right,or backward to rotate the robot',
      );
      error.statusCode = 422;
      throw error;
    }

    const { command } = req.params;
    const log = new Logs({
      command,
    });
    saved.log = await log.save();

    const prevLocation = await Location.currentLocation();
    const newLocation = Robot.turn(prevLocation, command);
    const location = new Location(newLocation);
    saved.location = await location.save();

    res.status(201).json({
      message: `robot turned ${command} successfully!`,
      prevLocation,
      currentLocation: newLocation,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

  return saved;
};
