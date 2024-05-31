const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
});


module.exports = mongoose.model('USER', userModel);