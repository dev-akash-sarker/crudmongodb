const Task = require("../model/dataModel");
const { findByIdAndUpdate, findById } = require("../model/userModel");

const updateController = async (req, res) => {
  const { id, name } = req.body;
  const updateTask = await Task.findByIdAndUpdate(
    { _id: id },
    { name: name },
    { new: true }
  );

  console.log(updateTask);
  res.send("update complete");
};

module.exports = updateController;
