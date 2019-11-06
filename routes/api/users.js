const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// @route POST api/users
// @desc Register User
// @access Public

router.post("/", async (req, res) => {
  const { name, surname, birthYear, birthPlace } = req.body;
  user = new User({
    name,
    surname,
    birthYear,
    birthPlace
  });
  await user.save();
  res.send("user registered");
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ msg: "User removed" });
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", (req, res) => {
  const { name, surname, birthYear, birthPlace } = req.body;
  User.findByIdAndUpdate(req.params.id, {
    name,
    surname,
    birthYear,
    birthPlace
  }).then(() => {
    User.findOne({ _id: req.params.id }).then(answer => {
      res.send(answer);
    });
  });
});

module.exports = router;
