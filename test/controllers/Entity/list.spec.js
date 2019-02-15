const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/media/entity';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

describe('Entity-Controller', function () {
  it('/GET: list successfully', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(200, {
        "data": [
          {
              "id": "42ceb1ab-18ef-4f2e-b076-14299756d182",
              "name": "Sample Video 1",
              "shortDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              "view": 0,
              "createdAt": "2018-06-22T19:20:17.000Z",
              "updatedAt": "2018-06-22T19:20:17.000Z"
          },
        ],
        "code": 200,
      });

    const result = await uiza.entity.list();
    expect(result.code).eq(200)
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.entity.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.entity.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.entity.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.entity.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.entity.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.entity.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.entity.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
