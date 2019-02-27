const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/live/entity/dvr';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": [
    {
      "id": "040df935-61c4-46f7-a41f-0a899ebaa2cc",
      "entityId": "ee122e85-553f-4621-bc77-1396191d5846",
      "feedId": "3e3b75df-e6fa-471c-b386-8f44b8a34b6c",
    },
    {
      "id": "3fec45e9-932b-4efe-b97f-dc3053acaa05",
      "entityId": "47e804bc-d4e5-4442-8f1f-20341a156a70",
      "channelName": "e9034eac-4905-4f9a-8e79-c0bd67e49dd5",
      "feedId": "12830696-87e3-4209-a877-954f8f008964",
    }
  ],
};

describe('LiveStreaming-Controller', function () {
  it('/GET: list_recorded successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.live.list_recorded();
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.live.list_recorded();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.live.list_recorded();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.live.list_recorded();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.live.list_recorded();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.live.list_recorded();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.live.list_recorded();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.live.list_recorded();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
