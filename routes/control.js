"use strict";
var express = require("express");
var controller = require("../controllers/control");
var router = express.Router();
router.post('/fwd', controller.fwd);
router.post('/back', controller.back);
router.post('/left', controller.left);
router.post('/right', controller.right);
router.post('/stop', controller.stop);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMvY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQW9DO0FBRXBDLG1EQUFzRDtBQUV0RCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRXBDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV0QyxpQkFBUyxNQUFNLENBQUMifQ==