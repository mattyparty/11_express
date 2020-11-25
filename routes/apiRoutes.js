const router = require("express").Router();
const notesData = require("../db/db");
const path = require("path");
const fs = require("fs");

/////////////////////////////////////////////////////////////
router.get("/notes", function (req, res) {
  res.json(notesData);
});

//post new notes works
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    const dbFile = JSON.parse(data);
    dbFile.push(req.body);

    fs.writeFileSync("./db/db.json", JSON.stringify(dbFile), function (err) {
      if (err) throw err;

      res.json(notesData);
    });
  });

  res.end();
});
router.delete("notes/:id", (req, res) => {
  console.log("hello");
});

module.exports = router;

////////////////////////////////////////////////////////////////
