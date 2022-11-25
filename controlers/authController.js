const { StatusCodes } = require("http-status-codes");

const login = (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "OK", token: "token for login" });
};

const register = (req, res) => {
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "OK", token: "token for register" });
};

module.exports = {
  login,
  register,
};
