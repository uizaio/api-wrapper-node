const https = require('https');
const fetch = require('node-fetch');
const {get} = require('lodash');
const Errors = require('../utils/Errors');

const DEFAULT_CONFIG = {
  workspaceApiDomain: null,
  headers: {
    'Content-Type': 'application/json',
  },
  appId: null
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
  get: function (docUrl, path, params = {}, config = {}) {
    return this.performExecuteRequest(docUrl, path, { ...config, params, method: 'GET' });
  },

  post: function (docUrl, path, data = {}, config = {}) {
    return this.performExecuteRequest(docUrl, path, { ...config, data, method: 'POST' });
  },

  delete: function (docUrl, path, data = {}, config = {}) {
    return this.performExecuteRequest(docUrl, path, { ...config, data, method: 'DELETE' });
  },

  update: function (docUrl, path, data = {}, config = {}) {
    return this.performExecuteRequest(docUrl, path, { ...config, data, method: 'PUT' });
  },

  setWorkspaceApiDomain: function (workspaceApiDomain) {
    this.config.workspaceApiDomain = workspaceApiDomain
  },

  setAuthorization: function (author) {
    this.config.headers.Authorization = author
  },

  setAppId: function (appId) {
    this.config.appId = appId
  },

  errorHandler: function(json, docUrl, callback) {
    switch (true) {
      case json.code == 200:
        return callback(json.data || json);
      case json.code == 400:
        return callback(this.handlerResError('BadRequestError', docUrl, json.data));
      case json.code == 401:
        return callback(this.handlerResError('UnauthorizedError', docUrl, json.data));
      case json.code == 404:
        return callback(this.handlerResError('NotFoundError', docUrl, json.data));
      case json.code == 422:
        return callback(this.handlerResError('UnprocessableError', docUrl, json.data));
      case json.code == 500:
        return callback(this.handlerResError('InternalServerError', docUrl, json.data));
      case json.code == 503:
        return callback(this.handlerResError('ServiceUnavailableError', docUrl, json.data));
      case json.code > 400 && json.code < 500:
        return callback(this.handlerResError('ClientError', docUrl, json.data));
      case json.code > 500:
        return callback(this.handlerResError('ServerError', docUrl, json.data));
    }
  },

  handlerResError: function(type, docUrl, data) {
    return {
      type,
      message: !!data && !!data.message ? data.message : get(data, '0.message') || Errors().getMessage(type),
      description_link: docUrl
    }
  },

  performExecuteRequest: function (docUrl, path, config) {
    const { data } = config;
    let extraPath = '';
    const pattern = /^\?\w+\=/g;
    if (path.indexOf("?") > -1) {
      let substring = path.substring(path.indexOf("?"), path.length);
      if(pattern.test(substring)) {
        extraPath = `&appId=${this.config.appId}`
      }
    } else {
      extraPath = `?appId=${this.config.appId}`
    }
    return new Promise( (resolve, resject) => {
      fetch(`${this.config.workspaceApiDomain}${path}${extraPath}`, {
        method:  config.method,
        body:    JSON.stringify(data),
        headers: this.config.headers
      })
      .then(res => res.json())
      .then(data => {
        this.errorHandler(data, docUrl, function(result) {
          resolve(result)
        })
      })
      .catch(err => resject(err.message || err));
    })
  },
};

module.exports = RestClient;
