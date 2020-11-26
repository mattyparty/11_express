const router = require("express").Router();
const notesData = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
//const path = require("path");
const fs = require("fs");

/////////////////////////////////////////////////////////////
// router.get("/api/notes", function (req, res) {
//   res.json(notesData);
// });

// //post new notes works
// router.post("/api/notes", (req, res) => {
//   req.body.id = uuidv4();
//   notesData.push(req.body);

//   fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
//     if (err) throw err;
//   });

//   res.json(notesData);

// });

router
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
  })
  ////////////////////////////////////////////
  .get("/api/notes", function (req, res) {
    res.json(notesData);
  })

  //post new notes works
  .post("/api/notes", (req, res) => {
    req.body.id = uuidv4();
    notesData.push(req.body);

    fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
      if (err) throw err;
    });

    res.json(notesData);
  })

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
