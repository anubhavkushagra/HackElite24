const Appliance = require("../models/Appliance"); // Assuming you have a Mongoose model for appliances

// Add a new appliance
const addAppliance = async (req, res) => {
  try {
    const { name, energyUsage, isActive } = req.body;

    // Validation
    if (!name || !energyUsage || isActive === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create and save new appliance
    const newAppliance = new Appliance({
      name,
      energyUsage,
      isActive,
    });
    await newAppliance.save();

    res.status(201).json({ message: "Appliance added successfully", appliance: newAppliance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update an existing appliance
const updateAppliance = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, energyUsage, isActive } = req.body;

    const updatedAppliance = await Appliance.findByIdAndUpdate(
      id,
      { name, energyUsage, isActive },
      { new: true, runValidators: true } // Ensure validations run
    );

    if (!updatedAppliance) {
      return res.status(404).json({ error: "Appliance not found" });
    }

    res.status(200).json({ message: "Appliance updated successfully", appliance: updatedAppliance });
  } catch (err) {
    console.error("Update Error:", err.message); // Log the error message
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Delete an appliance
const deleteAppliance = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAppliance = await Appliance.findByIdAndDelete(id);

    if (!deletedAppliance) {
      return res.status(404).json({ error: "Appliance not found" });
    }

    res.status(200).json({ message: "Appliance deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addAppliance,
  updateAppliance,
  deleteAppliance,
};
