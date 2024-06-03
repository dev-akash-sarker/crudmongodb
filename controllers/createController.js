const taskName = require("../model/dataModel");
// create
const createController = (req, res) => {
  const { name } = req.body;
  console.log(name);
  console.log("all", taskName);

  const newtask = new taskName({
    name: name,
  });
  newtask.save().then(() => res.send("task created"));
};

module.exports = createController;
