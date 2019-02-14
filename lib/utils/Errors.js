'use strict';

module.exports = Errors;

var serverResponse = {
  ERR_UIZA_BAD_REQUEST: 'The request was unacceptable, often due to missing a required parameter.',
  ERR_UIZA_UNAUTHORIZED: 'No valid API key provided.',
  ERR_UIZA_NOT_FOUND: "The requested resource doesn't exist.",
  ERR_UIZA_UNPROCESSABLE: 'The syntax of the request is correct (often cause of wrong parameter)',
  ERR_UIZA_INTERNAL_SERVER_ERROR: 'We had a problem with our server. Try again later.',
  ERR_UIZA_SERVICE_UNAVAILABLE: 'The server is overloaded or down for maintenance.',
  ERR_UIZA_CLIENT_ERROR: 'The error seems to have been caused by the client',
  ERR_UIZA_SERVER_ERROR: 'the server is aware that it has encountered an error',
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
