class UnauthorizedError extends Error {
    constructor(message) {
      super(message);
      this.name = 'UnauthorizedError';
      this.statusCode = 401;
    }
  }
  
  class TokenExpiredError extends UnauthorizedError {
    constructor(message = 'Token expired') {
      super(message);
      this.name = 'TokenExpiredError';
    }
  }
  
  module.exports = { UnauthorizedError, TokenExpiredError };
  