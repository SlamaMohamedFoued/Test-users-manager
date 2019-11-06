const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  birthYear: {
    type: Number
  },
  birthPlace: {
    type: String
  }
});

module.exports = User = mongoose.model("user", userSchema);
