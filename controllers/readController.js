const AllTask = require("../model/dataModel");
const readController = async (req, res) => {
  try {
    const task = await AllTask.find({});
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = readController;
