const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    sensorId: { type: String, required: true },
    energyConsumption: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Sensor', sensorSchema);
