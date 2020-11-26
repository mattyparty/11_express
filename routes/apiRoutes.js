const router = require("express").Router();
const notesData = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

////////////////////////////////////////////
//API GET request called from index.js
router
  .get("/api/notes", function (req, res) {
    res.json(notesData);
  })

  //API POST request called from index.js
  .post("/api/notes", (req, res) => {
    req.body.id = uuidv4();
    notesData.push(req.body);

    fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
      if (err) throw err;
    });

    res.json(notesData);
  })
  //API DELETE request called from index.js takes the ID of the selected delte items and loops through
  // notes data and delete/splice's it from the array
  .delete("/api/notes/:id", (req, res) => {
    const removeID = req.params.id;
    for (let i = 0; i < notesData.length; i++) {
      if (notesData[i].id === removeID) {
        notesData.splice(i, 1);
      }
    }
    fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
      if (err) throw err;
    });
    //removeData = notesData;
    res.json(notesData);
  });

module.exports = router;

////////////////////////////////////////////////////////////////
