const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://stag-ap-southeast-1-api.uizadev.io';
const path = '/api/public/v4/admin/user/logout';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
uiza.setAppId('123')

const errorMessages = require('../../../lib/utils/Errors')();

describe('User-Controller', function () {
  it('/POST: log_out successfully', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(200, {
        "data": {"id": "123"},
        "code": 200,
      });

    const result = await uiza.user.log_out();
    expect(result).eqls({"id": "123"})
  });

  it('/POST: log_out missing parameters', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(400, {
        "code": 400,
      });
    const result = await uiza.user.log_out({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: unauthorized', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.user.log_out({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: not found', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.user.log_out({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.user.log_out({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.user.log_out({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: service is unable', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.user.log_out({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: caused by the client', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.user.log_out({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: server has encountered', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.user.log_out({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
