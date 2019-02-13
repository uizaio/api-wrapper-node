const https = require('https');
const fetch = require('node-fetch');

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

  performExecuteRequest: function (path, config) {
    const { data } = config;
    return new Promise( (resolve, resject) => {
      fetch(`${this.config.workspaceApiDomain}${path}`, {
        method:  config.method,
        body:    JSON.stringify(data),
        headers: this.config.headers
      })
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => resject(err.message || err));
    })
  },
};

module.exports = RestClient
