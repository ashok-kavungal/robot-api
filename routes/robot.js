const express = require('express');

const robotController = require('../controllers/robot');

const router = express.Router();

// robot/location  - returns current location cordinates(x,y)
router.get('/location', robotController.getCurrentlocation);

module.exports = router;
