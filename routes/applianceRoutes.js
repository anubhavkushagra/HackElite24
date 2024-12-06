// const express = require('express');
// const router = express.Router();
// const applianceController = require('../controllers/applianceController');

// router.get('/', applianceController.getApplianceData);

// module.exports = router;


const express = require("express");
const router = express.Router();
const {
  addAppliance,
  updateAppliance,
  deleteAppliance,
} = require("../controllers/applianceController");

// POST route for adding a new appliance
router.post("/add", addAppliance);

// PUT route for updating an existing appliance
router.put("/update/:id", updateAppliance);

// DELETE route for deleting an appliance
router.delete("/delete/:id", deleteAppliance);

module.exports = router;

