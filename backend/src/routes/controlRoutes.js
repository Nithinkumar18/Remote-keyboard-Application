const express = require('express');
const controlController = require('../controller/controlController');
const router = express.Router();

router.post('/acquire',controlController.acquireControl);
// router.post('/release',controlController.releaseControl);
router.get('/status', controlController.getControlStatus);  


module.exports = router;