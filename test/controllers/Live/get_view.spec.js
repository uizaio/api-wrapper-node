const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const id = 'd1781e62-2d2c-4e3c-b8de-e808e50ac845';
const path = '/api/public/v3/live/entity/tracking/current-view?id=';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": {
    "stream_name": "peppa-pig-english-episodes",
    "watchnow": 1,
    "day": 1533271205999
  },
};

describe('LiveStreaming-Controller', function () {
  it('/GET: get_view successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${id}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.live.get_view(id);
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${id}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.live.get_view(id);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: get_view missing parameters', async () => {
    nock(workspaceApiDomain)
      .get(`${path}undefined`)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.live.get_view();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${id}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.live.get_view(id);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${id}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.live.get_view(id);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${id}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.live.get_view(id);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${id}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.live.get_view(id);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${id}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.live.get_view(id);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}${id}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.live.get_view(id);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
