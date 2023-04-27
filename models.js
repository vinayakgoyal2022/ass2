var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 32,
  },

  email: {
    type: String,
    trim: true,
  },

  password: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
