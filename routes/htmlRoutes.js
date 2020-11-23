const router = require("express").Router();

const path = require("path");

//sends you to the notes html page
router.get("/notes", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
