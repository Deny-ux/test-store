class generalError extends Error {
  constructor(message, statusCode) {
    super(message);
  }
}

module.exports = generalError;
