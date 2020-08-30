"use strict";
exports.__esModule = true;
exports.right = exports.left = exports.back = exports.fwd = void 0;
var robot = require("../robot");
exports.fwd = function (req, res) {
    robot.moveFwd();
};
exports.back = function (req, res) {
    robot.moveBack();
};
exports.left = function (req, res) {
    robot.rotateLeft();
};
exports.right = function (req, res) {
    robot.rotateRight();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGdDQUFtQztBQUV0QixRQUFBLEdBQUcsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzNDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNwQixDQUFDLENBQUE7QUFFWSxRQUFBLElBQUksR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzVDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUE7QUFFWSxRQUFBLElBQUksR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzVDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUE7QUFFWSxRQUFBLEtBQUssR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzdDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUEifQ==