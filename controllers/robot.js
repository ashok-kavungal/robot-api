const Location = require('../models/location');

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
