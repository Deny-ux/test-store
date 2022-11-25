// TODO
// make this works somehow
const notFound = (req, res) => {
  console.log(11111111);
  return res.status(404).sendFile(__dirname + "../public/notExist.html");
};

module.exports = notFound;
