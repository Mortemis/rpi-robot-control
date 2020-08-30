"use strict";
exports.__esModule = true;

const GPIO = require('onoff').Gpio

exports.stop = exports.rotateRight = exports.rotateLeft = exports.moveBack = exports.moveFwd = void 0;
var PIN_LEFTMOTOR_STRAIGHT = 26;
var PIN_LEFTMOTOR_INVERTED = 19;
var PIN_RIGHTMOTOR_STRAIGHT = 13;
var PIN_RIGHTMOTOR_INVERTED = 12;

const motorLFwd = new GPIO(26, 'out');//26
const motorLBack = new GPIO(19, 'out');//19

const motorRFwd = new GPIO(12, 'out');//13
const motorRBack = new GPIO(13, 'out');//6

function moveFwd() {
    stop();
    motorLFwd.writeSync(1);
    motorRFwd.writeSync(1);
    console.log('fwd');
}
exports.moveFwd = moveFwd;

function moveBack() {
    stop();
    motorLBack.writeSync(1);
    motorRBack.writeSync(1);
    console.log('back');
}
exports.moveBack = moveBack;

function rotateLeft() {
    stop();
    motorRFwd.writeSync(1);
    motorLBack.writeSync(1);
    console.log('left');
}
exports.rotateLeft = rotateLeft;

function rotateRight() {
    stop();
    motorLFwd.writeSync(1);
    motorRBack.writeSync(1);
    console.log('right');
}
exports.rotateRight = rotateRight;
function stop() {
    motorLFwd.writeSync(0);
    motorLBack.writeSync(0);
    motorRFwd.writeSync(0);
    motorRBack.writeSync(0);
    console.log('stop');
}
exports.stop = stop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9ib3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvcm9ib3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDbEMsSUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFDbEMsSUFBTSx1QkFBdUIsR0FBRyxFQUFFLENBQUM7QUFDbkMsSUFBTSx1QkFBdUIsR0FBRyxFQUFFLENBQUM7QUFFbkMsU0FBZ0IsT0FBTztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7QUFGRCwwQkFFQztBQUVELFNBQWdCLFFBQVE7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixVQUFVO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsV0FBVztJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFGRCxrQ0FFQztBQUVELFNBQWdCLElBQUk7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBRkQsb0JBRUMifQ==