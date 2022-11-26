const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if (err.name == "ValidationError") {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: err.message });
  }

  if (err.code === 11000 && err.keyPattern.email === 1) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "user with this email already exists!" });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Error", err });
};

module.exports = errorHandlerMiddleware;
