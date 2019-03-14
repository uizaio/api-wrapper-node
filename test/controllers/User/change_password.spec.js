const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://stag-ap-southeast-1-api.uizadev.io'
const path = '/api/public/v4/admin/user/changePassword';
const yourAuthorizationKey = 'uap-123456789-f3c977b7';
const uiza = require('../../../lib/uiza.js')(yourAuthorizationKey);
uiza.setAppId('123456789')

const errorMessages = require('../../../lib/utils/Errors')();

const POST_DATA_FOR_CHANGE_PASSWORD = {
  'usrId': 'a6b039cf-4f1e-4b3a-bece-8a5f800496df',
  'oldPassword': '123456789',
  'newPassword': '987654321'
}

describe('User-Controller', function () {
  it('/POST: change_password successfully', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(200, {
        ...POST_DATA_FOR_CHANGE_PASSWORD,
        "code": 200,
      });
    const result = await uiza.user.change_password({
      ...POST_DATA_FOR_CHANGE_PASSWORD
    });
    expect(result.code).eq(200)
  });

  it('/POST: change_password missing parameters', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: unauthorized', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(401, {
        ...POST_DATA_FOR_CHANGE_PASSWORD,
        "code": 401,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: not found', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(404, {
        ...POST_DATA_FOR_CHANGE_PASSWORD,
        "code": 404,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(422, {
        ...POST_DATA_FOR_CHANGE_PASSWORD,
        "code": 422,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(500, {
        ...POST_DATA_FOR_CHANGE_PASSWORD,
        "code": 500,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: service is unable', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(503, {
        ...POST_DATA_FOR_CHANGE_PASSWORD,
        "code": 503,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: caused by the client', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(450, {
        ...POST_DATA_FOR_CHANGE_PASSWORD,
        "code": 450,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: server has encountered', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(501, {
        ...POST_DATA_FOR_CHANGE_PASSWORD,
        "code": 501,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
