// 1. specific errors for file (type, size)
// 2. for tokens (not provided, expired, invalid)
const { StatusCodes } = require("http-status-codes");

class GeneralAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BadRequestError extends GeneralAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
class NotFoundError extends GeneralAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

class UnAuthorizedError extends GeneralAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

class UnAuthenticatedError extends GeneralAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

class BadFileError extends GeneralAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = {
  GeneralAPIError,
  BadRequestError,
  NotFoundError,
  UnAuthorizedError,
  UnAuthenticatedError,
  BadFileError,
};
