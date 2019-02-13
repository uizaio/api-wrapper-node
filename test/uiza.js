var expect = require('chai').expect,
  Uiza = require('../lib/uiza.js')('apiwrapper.uiza.co', 'uap-7442d4b99eb349b1bb678614e64cf064-1405ee51'),
  workspace_api_domain = Uiza.WORKSPACE_API_DOMAIN,
  authorization = Uiza.AUTHORIZATION_KEY;

  describe('setApiKey', function() {
    it('uses workspace api domain', function() {
      expect(workspace_api_domain).to.equal('apiwrapper.uiza.co');
    });

    it('uses authorization', function() {
      expect(authorization).to.equal('uap-7442d4b99eb349b1bb678614e64cf064-1405ee51');
    });
  });
