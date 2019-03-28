const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://ap-southeast-1-api.uiza.co'
const path = '/api/public/v4/media/entity/callback?appId=your-app-id';
const uiza = require('../../../lib/uiza.js');
uiza.app_id('your-app-id');

const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": {
    "id": "0a6bf245-1cce-494f-a193-b5a44aa05558",
    "url": "https://callback-url.uiza.co",
    "headersData": null,
    "jsonData": {
      "text": "example callback"
    },
    "method": "POST",
    "status": 1,
    "createdAt": "2018-06-23T01:27:08.000Z",
    "updatedAt": "2018-06-23T01:27:08.000Z"
  }
}

describe('Callback-Controller', function () {
  it('/GET: retrieve successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.callback.retrieve();
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: retrieve missing parameters', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.callback.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.callback.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.callback.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.callback.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.callback.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.callback.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.callback.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.callback.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
