// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
const app = express();
// Tells node that we are creating an "express" server

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
