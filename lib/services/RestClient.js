const https = require('https');
const fetch = require('node-fetch');
const Errors = require('../utils/Errors');

const DEFAULT_CONFIG = {
  workspaceApiDomain: null,
  headers: {
    'Content-Type': 'application/json',
  },
};

function RestClient(workspaceApiDomain, authorization) {
  if (!(this instanceof RestClient)) {
    return new RestClient(workspaceApiDomain, authorization);
  }
  this.config = DEFAULT_CONFIG;
  workspaceApiDomain && this.setWorkspaceApiDomain(workspaceApiDomain);
  authorization && this.setAuthorization(authorization)
};

RestClient.prototype = {
  get: function (path, params = {}, config = {}) {
    return this.performExecuteRequest(path, { ...config, params, method: 'GET' });
  },

  post: function (path, data = {}, config = {}) {
    return this.performExecuteRequest(path, { ...config, data, method: 'POST' });
  },

  delete: function (path, data = {}, config = {}) {
    return this.performExecuteRequest(path, { ...config, data, method: 'DELETE' });
  },

  update: function (path, data = {}, config = {}) {
    return this.performExecuteRequest(path, { ...config, data, method: 'PUT' });
  },

  setWorkspaceApiDomain: function (workspaceApiDomain) {
    this.config.workspaceApiDomain = workspaceApiDomain
  },

  setAuthorization: function (author) {
    this.config.headers.Authorization = author
  },

  errorHandler: function(json, callback) {
    switch (true) {
      case json.code == 200:
        return callback(json);
      case json.code == 400:
        return callback(this.handlerResError('ERR_UIZA_BAD_REQUEST'));
      case json.code == 401:
        return callback(this.handlerResError('ERR_UIZA_UNAUTHORIZED'));
      case json.code == 404:
        return callback(this.handlerResError('ERR_UIZA_NOT_FOUND'));
      case json.code == 422:
        return callback(this.handlerResError('ERR_UIZA_UNPROCESSABLE'));
      case json.code == 500:
        return callback(this.handlerResError('ERR_UIZA_INTERNAL_SERVER_ERROR'));
      case json.code == 503:
        return callback(this.handlerResError('ERR_UIZA_SERVICE_UNAVAILABLE'));
      case json.code > 400 && json.code < 500:
        return callback(this.handlerResError('ERR_UIZA_CLIENT_ERROR'));
      case json.code > 500:
        return callback(this.handlerResError('ERR_UIZA_SERVER_ERROR'));
    }
  },

  handlerResError: function(type) {
    return {
      message: Errors().getMessage(type)
    }
  },

  performExecuteRequest: function (path, config) {
    const { data } = config;
    return new Promise( (resolve, resject) => {
      fetch(`${this.config.workspaceApiDomain}${path}`, {
        method:  config.method,
        body:    JSON.stringify(data),
        headers: this.config.headers
      })
      .then(res => res.json())
      .then(data => {
        this.errorHandler(data, function(result) {
          resolve(result)
        })
      })
      .catch(err => resject(err.message || err));
    })
  },
};

module.exports = RestClient;
