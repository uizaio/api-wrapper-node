const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const authorization = 'uap-123456123456-123456';
const uiza = require('../../../lib/uiza.js');
uiza.workspace_api_domain(workspaceApiDomain);
uiza.authorization(authorization);

const path = '/api/public/v3/media/entity/callback';
const errorMessages = require('../../../lib/utils/Errors')();

const POST_DATA_FOR_CREATING_CALLBACK = {
  'url': 'https://callback-url.uiza.co',
  'method': 'POST'
}

describe('Callback-Controller', function () {
  it('/POST: create successfully', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(200, {
        "data": {"id": "123"},
        "code": 200,
      });

    const result = await uiza.callback.create({
      ...POST_DATA_FOR_CREATING_CALLBACK
    });
    expect(result).eqls({"id": "123"})
  });

  it('/POST: create missing parameters', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.callback.create({
      "url":"https://callback-url.uiza.co",
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: unauthorized', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(401, {
        ...POST_DATA_FOR_CREATING_CALLBACK,
        "code": 401,
      });

    const result = await uiza.callback.create({
      "url":"https://callback-url.uiza.co",
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: not found', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(404, {
        ...POST_DATA_FOR_CREATING_CALLBACK,
        "code": 404,
      });

    const result = await uiza.callback.create({
      "url":"https://callback-url.uiza.co",
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(422, {
        ...POST_DATA_FOR_CREATING_CALLBACK,
        "code": 422,
      });

    const result = await uiza.callback.create({
      "url":"https://callback-url.uiza.co",
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(500, {
        ...POST_DATA_FOR_CREATING_CALLBACK,
        "code": 500,
      });

    const result = await uiza.callback.create({
      "url":"https://callback-url.uiza.co",
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: service is unable', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(503, {
        ...POST_DATA_FOR_CREATING_CALLBACK,
        "code": 503,
      });

    const result = await uiza.callback.create({
      "url":"https://callback-url.uiza.co",
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: caused by the client', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(450, {
        ...POST_DATA_FOR_CREATING_CALLBACK,
        "code": 450,
      });

    const result = await uiza.callback.create({
      "url":"https://callback-url.uiza.co",
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: server has encountered', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(501, {
        ...POST_DATA_FOR_CREATING_CALLBACK,
        "code": 501,
      });

    const result = await uiza.callback.create({
      "url":"https://callback-url.uiza.co",
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
