const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Sensor name is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    status: {
      type: Boolean,
      required: [true, "Status is required"],
    },
    light1_current_consumption_value: {
      type: Number,
      required: [true, "Current consumption value for light1 is required"],
    },
    light2_current_consumption_value: {
      type: Number,
      required: [true, "Current consumption value for light2 is required"],
    },
    fan_current_consumption_value: {
      type: Number,
      required: [true, "Current consumption value for fan is required"],
    },
    temperature: {
      type: Number,
      required: [true, "Temperature value is required"],
    },
    human_presence: {
      type: Boolean,
      required: [true, "Human presence status is required"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Sensor = mongoose.model("Sensor", sensorSchema);

module.exports = Sensor;
