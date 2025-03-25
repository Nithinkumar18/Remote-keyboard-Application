const express = require('express');
const releaseControl = require('../controller/keyboardController');

const router = express.Router();

router.get("/", releaseControl.getKeyboardState);
router.post("/toggle", releaseControl.toggleKey);

module.exports = router;