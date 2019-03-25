const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const authorization = 'uap-123456123456-123456';
const uiza = require('../../../lib/uiza.js');
uiza.workspace_api_domain(workspaceApiDomain);
uiza.authorization(authorization);

const keyword = 'sample';
const path = '/api/public/v3/media/entity/search?keyword=';
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": [
    {
        "id": "16ab25d3-fd0f-4568-8aa0-0339bbfd674f",
        "name": "Sample Video 001",
    },
    {
        "id": "16ab25d3-fd0f-4568-8aa0-0339bbfd674f",
        "name": "Sample video test",
    }
  ]
};

describe('Entity-Controller', function () {
  it('/GET: search successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${keyword}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.entity.search(keyword);
    expect(result).eqls(DATA_RESPONSE.data)
  });

  it('/GET: search missing parameters', async () => {
    nock(workspaceApiDomain)
      .get(`${path}undefined`)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.entity.search();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${keyword}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.entity.search(keyword);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${keyword}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.entity.search(keyword);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${keyword}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.entity.search(keyword);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${keyword}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.entity.search(keyword);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${keyword}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.entity.search(keyword);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${keyword}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.entity.search(keyword);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${keyword}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.entity.search(keyword);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
