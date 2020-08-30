"use strict";
exports.__esModule = true;
exports.right = exports.left = exports.back = exports.fwd = void 0;
var robot = require("../robot");
exports.fwd = function (req, res) {
    robot.moveFwd();
    res.status(200).json({ msg: 'ok' });
};
exports.back = function (req, res) {
    robot.moveBack();
    res.status(200).json({ msg: 'ok' });
};
exports.left = function (req, res) {
    robot.rotateLeft();
    res.status(200).json({ msg: 'ok' });
};
exports.right = function (req, res) {
    robot.rotateRight();
    res.status(200).json({ msg: 'ok' });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGdDQUFtQztBQUV0QixRQUFBLEdBQUcsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzNDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQTtBQUVZLFFBQUEsSUFBSSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDNUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBO0FBRVksUUFBQSxJQUFJLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUM1QyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUE7QUFFWSxRQUFBLEtBQUssR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzdDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQSJ9