const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "USER" },
  title: { type: String, require: true },
  description: { type: String, require: true },
});

module.exports = mongoose.model("TODO", todoModel);
