const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
// app.use(express.static(__dirname + "/public"));
app.use(express.static("./public"));

app.listen(port, console.log(`Listening on port ${port}...`));
