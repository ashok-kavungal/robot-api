/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const logSchema = new Schema({
  command: {
    type: String,
    enum: ['left', 'right', 'forward', 'backward', 'back'],
    required: true,
  },
  stepsize: {
    type: Number,
  },
  angle: {
    type: Number,
    min: 0,
    max: 360,
  },
  prevLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  },
  currLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

// eslint-disable-next-line func-names
logSchema.statics.getLogs = function () {
  const logsData = this.find()
    .select(' -__v -_id')
    .populate('prevLocation', 'x y angle -_id')
    .populate('currLocation', 'x y angle -_id');

  return logsData;
};

module.exports = mongoose.model('Log', logSchema);
