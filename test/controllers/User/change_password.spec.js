const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/admin/user/changepassword';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const PUT_DATA_FOR_CHANGE_PASSWORD = {
  'id': 'a6b039cf-4f1e-4b3a-bece-8a5f800496df',
  'oldPassword': '123456789',
  'newPassword': '987654321'
}

describe('User-Controller', function () {
  it('/PUT: change_password successfully', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(200, {
        ...PUT_DATA_FOR_CHANGE_PASSWORD,
        "code": 200,
      });

    const result = await uiza.user.change_password({
      ...PUT_DATA_FOR_CHANGE_PASSWORD
    });
    expect(result.code).eq(200)
  });

  it('/PUT: change_password missing parameters', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: unauthorized', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(401, {
        ...PUT_DATA_FOR_CHANGE_PASSWORD,
        "code": 401,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: not found', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(404, {
        ...PUT_DATA_FOR_CHANGE_PASSWORD,
        "code": 404,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(422, {
        ...PUT_DATA_FOR_CHANGE_PASSWORD,
        "code": 422,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(500, {
        ...PUT_DATA_FOR_CHANGE_PASSWORD,
        "code": 500,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: service is unable', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(503, {
        ...PUT_DATA_FOR_CHANGE_PASSWORD,
        "code": 503,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: caused by the client', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(450, {
        ...PUT_DATA_FOR_CHANGE_PASSWORD,
        "code": 450,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: server has encountered', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(501, {
        ...PUT_DATA_FOR_CHANGE_PASSWORD,
        "code": 501,
      });

    const result = await uiza.user.change_password({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
