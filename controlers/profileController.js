const { StatusCodes } = require("http-status-codes");

const getProfileData = async (req, res) => {
  if (!req.user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Unauthorized" });
  }
  const user = req.user;
  console.log(user);
  res.status(StatusCodes.OK).json({
    userID: user.userID,
    name: user.name,
    surname: user.surname,
    email: user.email,
  });
};

module.exports = { getProfileData };
