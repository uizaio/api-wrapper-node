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

const WORKSPACE_API_DOMAIN = 'https://ap-southeast-1-api.uiza.co';

function RestClient(authorization) {
  if (!(this instanceof RestClient)) {
    return new RestClient(authorization);
  }
  this.config = DEFAULT_CONFIG;
  this.setWorkspaceApiDomain(WORKSPACE_API_DOMAIN);
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
    let dataRequest = undefined;
    if (!!data) {
      dataRequest = {...data, appId: this.config.appId}
    }
    let status;
    return new Promise( (resolve, resject) => {
      fetch(`${this.config.workspaceApiDomain}${path}`, {
        method:  config.method,
        body:    JSON.stringify(dataRequest),
        headers: this.config.headers
      })
      .then(res => {
        status = res.status
        return res.json()})
      .then(data => {
        this.errorHandler(data, docUrl, function(result) {
          resolve(result)
        })
      })
      .catch(err => resject(err.message && {status, message: err.message} || err));
    })
  },
};

module.exports = RestClient;
