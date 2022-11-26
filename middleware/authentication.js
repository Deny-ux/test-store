const User = require("../models/User");
const { createJWT, isTokenValid } = require("../utils/jwt");
const { StatusCodes } = require("http-status-codes");
const auth = async (req, res, next) => {
  // check header
  const token = req.headers.authorization;
  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "no token provided" });
  }
  // const token = authHeader.split(" ")[1];

  try {
    const payload = isTokenValid(token);
    console.log(payload);
    // attach the user to the job routes
    req.user = {
      userId: payload.userId,
      name: payload.name,
      email: payload.email,
      surname: payload.surname,
    };
    next();
  } catch (error) {
    // throw new Error("Authentication invalid");
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "no token provided" });
  }
};

module.exports = auth;
