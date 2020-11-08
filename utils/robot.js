exports.move = (prevLocation, command, stepsize) => {
  let x;
  let y;
  switch (command) {
    case 'right':
      x = prevLocation.x + stepsize;
      y = prevLocation.y;
      break;

    case 'left':
      x = prevLocation.x - stepsize;
      y = prevLocation.y;
      break;

    case 'forward':
      x = prevLocation.x;
      y = prevLocation.y + stepsize;
      break;

    case 'backward':
      x = prevLocation.x;
      y = prevLocation.y - stepsize;
      break;

    default:
    // returns x,y undefined
    // mongoose throws type error
  }

  return {
    x,
    y,
    angle: prevLocation.angle,
  };
};

exports.turn = (prevLocation, command) => {
  let angle;
  switch (command) {
    case 'right':
      angle = prevLocation.angle - 90;
      break;
    case 'left':
      angle = prevLocation.angle + 90;
      break;
    case 'back':
      angle = prevLocation.angle + 180;
      break;

    default:
    // returns angle undefined
    // mongoose throws type error
  }

  return {
    x: prevLocation.x,
    y: prevLocation.y,
    angle: angle + Math.ceil(-angle / 360) * 360,
  };
};
