const axios = require("axios");
const Sensor = require("../models/Sensor");

// Add a new sensor
const addSensor = async (req, res) => {
  try {
    // const { name, location, status, Light1, Light2, Fan, Temp,Presence } = req.body;
    const { Light1, Light2, Fan, Temp,Presence } = req.body;

    // Validate request body
    // if (!name || !location || status === undefined || Light1 === undefined || Light2 === undefined || Fan === undefined || Temp === undefined ||Presence === undefined) {
    if (Light1 === undefined || Light2 === undefined || Fan === undefined || Temp === undefined ||Presence === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newSensor = new Sensor({
      // name,
      // location,
      // status,
      Light1,
      Light2,
      Fan,
      Temp,
      Presence
    });

    await newSensor.save();

    res.status(201).json({
      message: "Sensor added successfully",
      sensor: newSensor,
    });
  } catch (err) {
    console.error("Error adding sensor:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all sensors
const getAllSensors = async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.status(200).json(sensors);
  } catch (err) {
    console.error("Error fetching sensors:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Process sensor data and get AI suggestions
const processSensorData = async (req, res) => {
  try {
    const sensorData = req.body;

    // Validate incoming data
    if (!sensorData) {
      return res.status(400).json({ error: "No sensor data provided" });
    }

    // Save sensor data to database
    const newSensor = new Sensor(sensorData);
    await newSensor.save();

    // Send data to AI model
    const aiResponse = await axios.post("http://localhost:5000/predict", sensorData);

    // Return AI's response
    res.status(200).json({
      message: "AI Suggestion",
      suggestion: aiResponse.data.suggestion,
    });
  } catch (err) {
    console.error("Error processing sensor data:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addSensor,
  getAllSensors,
  processSensorData, // Export the new function
};
