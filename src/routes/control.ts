import express = require('express');

import controller = require('../controllers/control');

const router = express.Router();

router.post('/fwd', controller.fwd);

router.post('/back', controller.back);

router.post('/left', controller.left);

router.post('/right', controller.right);

router.post('/stop', controller.stop);

export = router;