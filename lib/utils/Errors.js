'use strict';

module.exports = Errors;

var serverResponse = {
  BadRequestError: 'The request was unacceptable, often due to missing a required parameter.',
  UnauthorizedError: 'No valid API key provided.',
  NotFoundError: "The requested resource doesn't exist.",
  UnprocessableError: 'The syntax of the request is correct (often cause of wrong parameter)',
  InternalServerError: 'We had a problem with our server. Try again later.',
  ServiceUnavailableError: 'The server is overloaded or down for maintenance.',
  ClientError: 'The error seems to have been caused by the client',
  ServerError: 'The server is aware that it has encountered an error',
}

function Errors() {
  if (!(this instanceof Errors)) {
    return new Errors();
  }
}

Errors.prototype = {
  getMessage: function(errCode) {
    return serverResponse[errCode];
  },
}
