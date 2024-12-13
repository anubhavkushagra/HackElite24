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
const path = require("path");
const connectDB = require("./config/db");
const applianceRoutes = require("./routes/applianceRoutes");
const sensorRoutes = require("./routes/sensorRoutes");
const staticRoute = require("./routes/staticRoute");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

const cors = require('cors');
app.use(cors());


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

// Middleware
app.use(express.json()); // Parse incoming JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/api/appliances", applianceRoutes);
// app.use("/", staticRoute);
app.use('/signin', authRoutes);

app.use("/api/sensors", sensorRoutes);

app.get('/loginRedirect', (req, res) => {
  res.render('loginRedirect')
});

// // Views
// app.get('/', (req, res) => res.render('homePage'));
app.get('/', (req, res) => res.render('home'))
app.get('/signin', (req, res) => {
  res.render('signin');
});

app.get('/Aisuggestion', (req, res) => {
  res.render('AIsujation'); // Ensure AIsuggestion.ejs is in your 'views' directory
});
// app.get('/appliances', (req, res) => 
// 
// res.render('appliances');

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


