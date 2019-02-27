const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/live/entity/feed';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const PUT_DATA_FOR_STOP_A_LIVE_FEED = {
  "id": "d3a7b3e7-1b0b-4d52-b804-aa000a0bd711"
}

describe('LiveStreaming-Controller', function () {
  it('/PUT: update successfully', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(200, {
        ...PUT_DATA_FOR_STOP_A_LIVE_FEED,
        "code": 200,
      });

    const result = await uiza.live.stop_feed({
      ...PUT_DATA_FOR_STOP_A_LIVE_FEED
    });
    expect(result.code).eq(200)
  });

  it('/PUT: update missing parameters', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.live.stop_feed({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: unauthorized', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.live.stop_feed({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: not found', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.live.stop_feed({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.live.stop_feed({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.live.stop_feed({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: service is unable', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.live.stop_feed({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: caused by the client', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.live.stop_feed({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: server has encountered', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.live.stop_feed({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
