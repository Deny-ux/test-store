// TODO
const path = require("path");

// make this works somehow
const notFoundPath = path.join(__dirname, "../public/notExist.html");
const notFound = (req, res) => {
  console.log("this is from notFound middleware");
  return res.status(404).sendFile(notFoundPath);
};

module.exports = notFound;
