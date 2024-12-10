// const mongoose = require('mongoose');

// const applianceSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     energyConsumption: { type: Number, required: true },
//     lastUpdated: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Appliance', applianceSchema);


const mongoose = require("mongoose");

const applianceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  energyUsage: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Appliance", applianceSchema);

