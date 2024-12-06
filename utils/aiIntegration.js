const axios = require('axios');

const sendToAIModel = async (sensorData) => {
    try {
        const response = await axios.post(process.env.AI_SERVER_URL, sensorData);
        return response.data; // AI response (disaggregated data)
    } catch (err) {
        console.error("Error communicating with AI model:", err.message);
        throw new Error("AI integration failed");
    }
};

module.exports = { sendToAIModel };
