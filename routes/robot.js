const express = require('express');
const {
  body,
  param
} = require('express-validator');

const robotController = require('../controllers/robot');

const router = express.Router();

const moveCommandValidator = [
  body('command').custom((value) => {
    if (!['left', 'right', 'backward', 'forward'].includes(value)) {
      throw new Error('invalid command');
    }
    return true;
  }),
  body('stepsize').isNumeric(),
];

const turnCommandValidator = [
  param('command').custom((value) => {
    if (!['left', 'right', 'backward'].includes(value)) {
      throw new Error('invalid command');
    }
    return true;
  }),
];


// robot/location  - returns current location cordinates(x,y)
router.get('/location', robotController.getCurrentlocation);

// robot/move - moves the left,right,forward and backward according to stepsize
router.post('/move', moveCommandValidator, robotController.postNextlocation);

// robot/turn/:command - rotates robot by 90 or 180 degrees
router.post(
  '/turn/:command',
  turnCommandValidator,
   robotController.postRotateangle
);

module.exports = router;
