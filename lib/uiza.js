/* eslint-disable no-unused-expressions */

'use strict';

const restClient = require('./services/RestClient');
const entity = require('./controllers/Entity');
const category = require('./controllers/Category');
const storage = require('./controllers/Storage');
const callback = require('./controllers/Callback');
const live = require('./controllers/Live');
const analytic = require('./controllers/Analytic');
const user = require('./controllers/User');

function Uiza() {
  if (!(this instanceof Uiza)) {
    return new Uiza();
  }
  this.entity = entity;
  this.category = category;
  this.storage = storage;
  this.callback = callback;
  this.live = live;
  this.analytic = analytic;
  this.user = user;
  this.restClient = restClient();
}

Uiza.prototype = {
  workspace_api_domain: function(workspaceApiDomain) {
    this.restClient.setWorkspaceApiDomain(workspaceApiDomain);
  },
  authorization: function (author) {
    this.restClient.setAuthorization(author)
  },
};

module.exports = Uiza();
