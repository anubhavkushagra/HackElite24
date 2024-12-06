const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.post('/', sensorController.addSensorData);
router.get('/', sensorController.getSensorData);

module.exports = router;
