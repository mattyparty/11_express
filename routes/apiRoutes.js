const router = require("express").Router();
const notesData = require("../db/db");
const path = require("path");
const fs = require("fs");

router
  .get("/notes", function (req, res) {
    res.json(notesData);
  })
  .post("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      const dbFile = JSON.parse(data);
      dbFile.push(req.body);
      //console.log(dbFile);
      //console.log(req.body);
      ////this all prolly needs to be in here
      fs.writeFileSync("./db/db.json", JSON.stringify(dbFile), function (err) {
        if (err) throw err;
        //console.log("The file has been saved!");
      });
    });

    res.end();
  });
//code here
//1. find out what data they are sending  us ()
//console.log(req.body);
//   fs.readFile("./db/db.json", function (err, data) {
//    // var notesJson = JSON.parse(data);
//     //notesJson.push(req.body);
//     //console.log(notesJson);
//     // fs.writeFile("./db/db.json", JSON.stringify(notesJson));
//     //console.log(JSON.stringify(notesJson));

//   //   fs.writeFileSync("./db/db.json", JSON.stringify(notesJson), (err) => {
//   //     if (err) throw err;
//   //     console.log("The file has been saved!");
//   // });
//   //res.end();
// });

// console.log(notesData);
// console.log(req.body);
//req.body and push to the static json file
// read data, set up as an array, then push to an array

//vvvstatus code

module.exports = router;
