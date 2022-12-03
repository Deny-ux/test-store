const { StatusCodes } = require("http-status-codes");
const { GeneralAPIError } = require("../errors");
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
  if (err instanceof GeneralAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
