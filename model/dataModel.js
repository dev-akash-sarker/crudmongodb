const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("task", dataSchema);
