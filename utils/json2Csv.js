// const express = require('express');
// const router = express.Router();
// const { convertJsonToCsv } = require('../utils/jsonToCsv');
// const axios = require('axios');
// const fs = require('fs');

// // Add Sensor Data and Send to AI
// router.post('/sensors', async (req, res) => {
//     try {
//         const sensorData = req.body;

//         // Step 1: Convert JSON to CSV
//         const filePath = './uploads/sensorData.csv'; // Path to save the CSV file
//         await convertJsonToCsv(sensorData, filePath);

//         // Step 2: Send the CSV file to the AI server
//         const formData = new FormData();
//         formData.append('file', fs.createReadStream(filePath));

//         const aiResponse = await axios.post(process.env.AI_SERVER_URL, formData, {
//             headers: {
//                 ...formData.getHeaders(),
//             },
//         });

//         // Cleanup: Delete the CSV file after sending
//         fs.unlinkSync(filePath);

//         // Respond with AI server's response
//         res.status(200).json({ message: 'Data processed successfully', aiResponse: aiResponse.data });
//     } catch (error) {
//         console.error('Error processing sensor data:', error);
//         res.status(500).json({ error: 'Failed to process sensor data' });
//     }
// });

// module.exports = router;