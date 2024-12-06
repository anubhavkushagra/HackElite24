const Sensor = require('../models/Sensor');
const Appliance = require('../models/Appliance');
const { sendToAIModel } = require('../utils/aiIntegration');

exports.addSensorData = async (req, res) => {
    try {
        const sensor = new Sensor(req.body);
        await sensor.save();

        // Send to AI Model
        const aiResponse = await sendToAIModel(req.body);

        // Update Appliance Data
        for (const [applianceName, energy] of Object.entries(aiResponse)) {
            await Appliance.findOneAndUpdate(
                { name: applianceName },
                { energyConsumption: energy, lastUpdated: Date.now() },
                { upsert: true, new: true }
            );
        }

        res.status(200).json({ message: "Data saved and processed", aiResponse });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save data" });
    }
};

exports.getSensorData = async (req, res) => {
    try {
        const sensors = await Sensor.find({});
        res.json(sensors);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch sensor data" });
    }
};
