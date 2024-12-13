// // const axios = require("axios");
// // const Sensor = require("../models/Sensor");

// // // Add a new sensor
// // const addSensor = async (req, res) => {
// //   try {
// //     // const { name, location, status, Light1, Light2, Fan, Temp,Presence } = req.body;
// //     const { Light1, Light2, Fan, Temp,Presence } = req.body;

// //     // Validate request body
// //     // if (!name || !location || status === undefined || Light1 === undefined || Light2 === undefined || Fan === undefined || Temp === undefined ||Presence === undefined) {
// //     if (Light1 === undefined || Light2 === undefined || Fan === undefined || Temp === undefined ||Presence === undefined) {
// //       return res.status(400).json({ error: "All fields are required" });
// //     }

// //     const newSensor = new Sensor({
// //       // name,
// //       // location,
// //       // status,
// //       Light1,
// //       Light2,
// //       Fan,
// //       Temp,
// //       Presence
// //     });

// //     await newSensor.save();

// //     res.status(201).json({
// //       message: "Sensor added successfully",
// //       sensor: newSensor,
// //     });
// //   } catch (err) {
// //     console.error("Error adding sensor:", err.message);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// // // Get all sensors
// // const getAllSensors = async (req, res) => {
// //   try {
// //     const sensors = await Sensor.find();
// //     res.status(200).json(sensors);
// //   } catch (err) {
// //     console.error("Error fetching sensors:", err.message);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// // // Process sensor data and get AI suggestions
// // const processSensorData = async (req, res) => {
// //   try {
// //     const sensorData = req.body;

// //     // Validate incoming data
// //     if (!sensorData) {
// //       return res.status(400).json({ error: "No sensor data provided" });
// //     }

// //     // Save sensor data to database
// //     const newSensor = new Sensor(sensorData);
// //     await newSensor.save();

// //     // Send data to AI model
// //     const aiResponse = await axios.post("http://localhost:5000/predict", sensorData);

// //     // Return AI's response
// //     res.status(200).json({
// //       message: "AI Suggestion",
// //       suggestion: aiResponse.data.suggestion,
// //     });
// //   } catch (err) {
// //     console.error("Error processing sensor data:", err.message);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };

// // module.exports = {
// //   addSensor,
// //   getAllSensors,
// //   processSensorData, // Export the new function
// // };


// const axios = require("axios");
// const Sensor = require("../models/Sensor");

// // Add a new sensor
// const addSensor = async (req, res) => {
//   try {
//     const { Light1, Light2, Fan, Temp, Presence } = req.body;

//     // Validate request body
//     if (Light1 === undefined || Light2 === undefined || Fan === undefined || Temp === undefined || Presence === undefined) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newSensor = new Sensor({
//       Light1,
//       Light2,
//       Fan,
//       Temp,
//       Presence
//     });

//     await newSensor.save();

//     res.status(201).json({
//       message: "Sensor added successfully",
//       sensor: newSensor,
//     });
//   } catch (err) {
//     console.error("Error adding sensor:", err.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get all sensors
// const getAllSensors = async (req, res) => {
//   try {
//     const sensors = await Sensor.find();
//     res.status(200).json(sensors);
//   } catch (err) {
//     console.error("Error fetching sensors:", err.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // // Process sensor data and get AI suggestions
// // const processSensorData = async (req, res) => {
// //   try {
// //     const sensorData = req.body;

// //     // Validate incoming data
// //     if (!sensorData) {
// //       return res.status(400).json({ error: "No sensor data provided" });
// //     }

// //     // Save sensor data to database
// //     const newSensor = new Sensor(sensorData);
// //     await newSensor.save();

// //     // Send data to AI model
// //     const aiResponse = await axios.post("http://localhost:5000/predict", sensorData);

// //     // Return AI's response
// //     res.status(200).json({
// //       message: "AI Suggestion",
// //       suggestion: aiResponse.data.suggestion,
// //     });
// //   } catch (err) {
// //     console.error("Error processing sensor data:", err.message);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // };













// // const processSensorData = async (req, res) => {
// //   try {
// //     const sensorData = req.body;
// //     console.log("Received Sensor Data:", sensorData);

// //     // CHANGE: More robust data validation
// //     if (!sensorData || typeof sensorData !== 'object') {
// //       return res.status(400).json({ error: "Invalid sensor data" });
// //     }

// //     // CHANGE: Ensure all required fields are present
// //     const requiredFields = ['Light1', 'Light2', 'Fan', 'Temp', 'Presence'];
// //     const missingFields = requiredFields.filter(field => 
// //       sensorData[field] === undefined
// //     );

// //     if (missingFields.length > 0) {
// //       return res.status(400).json({ 
// //         error: "Missing required fields", 
// //         missingFields 
// //       });
// //     }

// //     // Save sensor data
// //     const newSensor = new Sensor(sensorData);
// //     await newSensor.save();

// //     try {
// //       // CHANGE: Simplified AI model communication
// //       const aiResponse = await axios.post("http://localhost:5000/predict", sensorData);

// //       // CHANGE: More flexible suggestion handling
// //       const suggestion = aiResponse.data.suggestion || 
// //         "No specific recommendation at this time";

// //       res.status(200).json({
// //         message: "AI Suggestion Generated",
// //         suggestion: suggestion,
// //       });

//         res.status(200).json({
//           message: "AI Suggestion Generated",
//           suggestion: suggestion, // From your AI model
//           timestamp: new Date().toISOString()
//         });
// //     } catch (aiError) {
// //       console.error("AI Model Communication Error:", aiError);
// //       res.status(500).json({ 
// //         error: "Could not retrieve AI suggestion", 
// //         details: aiError.message 
// //       });
// //     }
// //   } catch (err) {
// //     console.error("Sensor Data Processing Error:", err);
// //     res.status(500).json({ 
// //       error: "Internal Server Error", 
// //       details: err.message 
// //     });
// //   }
// // };


// const processSensorData = async (req, res) => {
//   try {
//     const sensorData = req.body;
//     console.log("Received Sensor Data from Raspberry Pi:", sensorData);

//     // Existing validation and processing...

//     // Ensure a clear, concise suggestion is returned
//     res.status(200).json({
//       message: "AI Suggestion Generated",
//       suggestion: suggestion, // From your AI model
//       timestamp: new Date().toISOString()
//     });
//   } catch (err) {
//     // Error handling...
//   }
// };


// module.exports = {
//   addSensor,
//   getAllSensors,
//   processSensorData,
// };

const axios = require("axios");
const Sensor = require("../models/Sensor");

// Add a new sensor
const addSensor = async (req, res) => {
  try {
    const { Light1, Light2, Fan, Temp, Presence } = req.body;

    // Validate request body
    if (Light1 === undefined || Light2 === undefined || Fan === undefined || Temp === undefined || Presence === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newSensor = new Sensor({
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
    console.log("Received Sensor Data:", sensorData);

    // Validate incoming data
    if (!sensorData || typeof sensorData !== 'object') {
      return res.status(400).json({ error: "Invalid sensor data" });
    }

    // Ensure all required fields are present
    const requiredFields = ['Light1', 'Light2', 'Fan', 'Temp', 'Presence'];
    const missingFields = requiredFields.filter(field => 
      sensorData[field] === undefined
    );

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        error: "Missing required fields", 
        missingFields 
      });
    }

    // Save sensor data
    const newSensor = new Sensor(sensorData);
    await newSensor.save();

    try {
      // Communicate with AI model
      const aiResponse = await axios.post("http://localhost:5000/predict", sensorData);

      // Handle AI suggestion
      const suggestion = aiResponse.data.suggestion || 
        "No specific recommendation at this time";

      res.status(200).json({
        message: "AI Suggestion Generated",
        suggestion: suggestion,
        timestamp: new Date().toISOString()
      });
    } catch (aiError) {
      console.error("AI Model Communication Error:", aiError);
      res.status(500).json({ 
        error: "Could not retrieve AI suggestion", 
        details: aiError.message 
      });
    }
  } catch (err) {
    console.error("Sensor Data Processing Error:", err);
    res.status(500).json({ 
      error: "Internal Server Error", 
      details: err.message 
    });
  }
};

module.exports = {
  addSensor,
  getAllSensors,
  processSensorData,
};