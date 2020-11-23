const router = require("express").Router();
const notesData = require("../db/db.json");
const path = require("path");
//const fs = require("fs")
// let rawdata = fs.readFileSync(notesData)
// let rawdata2 = JSON.parse(rawdata)

// router.route("/api/notes").get((_req, res) => {
//   //res.json(notesData);
//   console.log("test");
//   //console.log(notesData);
// });

//sends you to the notes html page
router.get("/notes", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
