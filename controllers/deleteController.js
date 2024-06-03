const Task = require("../model/dataModel");
const { findByIdAndUpdate } = require("../model/userModel");

const deleteController = async (req, res) => {
  const { id } = req.body;
  await Product.findByIdAndDelete(id).then(() => res.send("Task is Removed"));
};

module.exports = deleteController;
