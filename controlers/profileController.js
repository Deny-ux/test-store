const { StatusCodes } = require("http-status-codes");

const getProfileData = async (req, res) => {
  if (!req.user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Unauthorized" });
  }
  res.status(StatusCodes.OK).json({ user: req.user });
};

module.exports = { getProfileData };
