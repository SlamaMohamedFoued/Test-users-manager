const mongoose = require("mongoose");

const pictureSchema = new mongoose.Schema({
  pictureLink: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = Picture = mongoose.model("picture", pictureSchema);
