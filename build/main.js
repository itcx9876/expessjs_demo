"use strict";

// Doesn't support es6 import or modules system so we are using es5 modules here
const express = require("express");
const bodyParser = require("body-parser");

// Custom imports

const routes = require("./src/routes");
const app = express();
app.use(bodyParser.json());
app.use("/api/v1/", routes());
app.listen(8000 || process.env.PORT, () => {
  console.log("server is listening on port ", 8000 || process.env.PORT);
});