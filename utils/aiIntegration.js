const axios = require('axios');

const sendToAIModel = async (sensorData) => {
    try {
        const response = await axios.post(process.env.https://platform.openai.com/docs/overview, sensorData);
        return response.data; // AI response (disaggregated data)
    } catch (err) {
        console.error("Error communicating with AI model:", err.message);
        throw new Error("AI integration failed");
    }
};

module.exports = { sendToAIModel };
