var expect = require('chai').expect,
  Uiza = require('../lib/uiza.js')('your-workspace-api-domain.uiza.co', 'your-authorization-key'),
  workspace_api_domain = Uiza.WORKSPACE_API_DOMAIN,
  authorization = Uiza.AUTHORIZATION_KEY;

  describe('setApiKey', function() {
    it('uses workspace api domain', function() {
      expect(workspace_api_domain).to.equal('your-workspace-api-domain.uiza.co');
    });

    it('uses authorization', function() {
      expect(authorization).to.equal('your-authorization-key');
    });
  });
