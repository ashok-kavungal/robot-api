const mongoose = require('mongoose');

const { Schema } = mongoose;
const logSchema = new Schema({
  command: {
    type: String,
    enum: ['left', 'right', 'forward', 'backward', 'admin'],
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
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Log', logSchema);
