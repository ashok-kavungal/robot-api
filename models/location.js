const mongoose = require('mongoose');

const { Schema } = mongoose;
const locationSchema = new Schema({
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  angle: {
    type: Number,
    min: 0,
    max: 360,
    required: true,
  },
  time: { type: Date, default: Date.now },
});

// eslint-disable-next-line func-names
locationSchema.statics.currentLocation = function () {
  return this.findOne()
    .sort({
      $natural: -1,
    })
    .select('x y angle -_id');
};

module.exports = mongoose.model('Location', locationSchema);
