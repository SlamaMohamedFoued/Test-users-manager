const express = require("express");
const router = express.Router();
const Picture = require("../../models/picture");

// @route POST api/users
// @desc Register User
// @access Public

router.post("/", async (req, res) => {
  const { pictureLink, user } = req.body;
  picture = new Picture({
    pictureLink,
    user
  });
  await picture.save();
  res.send("Picture registered");
});

router.get("/:id", async (req, res) => {
  try {
    const pictures = await Picture.find({ user: req.params.id });
    res.json(pictures);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Picture.findByIdAndRemove(req.params.id);
    res.json({ msg: "Picture removed" });
  } catch (err) {
    console.log(err);
  }
});




module.exports = router;
