'use strict';

module.exports = Uiza;

function Uiza(workspace, auth) {
  if (!(this instanceof Uiza)) {
    return new Uiza(workspace, auth);
  }
  this.setUizaParams(workspace, auth);
}

Uiza.prototype = {
  setUizaParams: function(workspace, auth) {
    this.WORKSPACE_API_DOMAIN = workspace;
    this.AUTHORIZATION_KEY = auth;
  },
};

