const express = require('express');
const controlController = require('../controller/controlController');
const router = express.Router();

router.post('/acquire',controlController.acquireControl);
router.get('/status', controlController.getControlStatus);  


module.exports = router;
