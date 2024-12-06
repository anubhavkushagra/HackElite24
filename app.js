// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const path = require('path');
// const connectDB = require('./config/db');

// // Load Config
// dotenv.config();

// // Connect to DB
// connectDB();

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');

// // Routes
// app.use('/api/sensors', require('./routes/sensorRoutes'));
// app.use('/api/appliances', require('./routes/applianceRoutes'));

// // Views
// app.get('/', (req, res) => res.render('index'));
// app.get('/appliances', (req, res) => res.render('appliances'));

// // Server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const applianceRoutes = require("./routes/applianceRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Routes
app.use("/api/appliances", applianceRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
