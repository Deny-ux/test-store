// 1. specific errors for file (type, size)
// 2. for tokens (not provided, expired, invalid)
class generalError extends Error {
  constructor(message, statusCode) {
    super(message);
  }
}

module.exports = generalError;
