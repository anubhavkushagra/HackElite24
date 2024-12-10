const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.post('/add', sensorController.addSensorData);
router.get('/', sensorController.getSensorData);

module.exports = router;
