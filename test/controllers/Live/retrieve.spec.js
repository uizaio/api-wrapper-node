const expect = require('chai').expect;
const nock = require('nock');

const id = 'd1781e62-2d2c-4e3c-b8de-e808e50ac845';
const path = '/api/public/v4/live/entity?appId=your-app-id';
const workspaceApiDomain = 'https://ap-southeast-1-api.uiza.co'
const yourAuthorizationKey = 'your-authorization';
const uiza = require('../../../lib/uiza.js');
uiza.authorization(yourAuthorizationKey);
uiza.app_id('your-app-id');

const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": { 
    'id': '1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab',
    'name': 'test event',
    'description': 'This is for test event',
    'mode': 'push',
    'resourceMode': 'single',
    'encode': 1,
    'channelName': '19762307-e105-4628-8117-b5815a11d175',
    'lastPresetId': null,
    'lastFeedId': null,
    'poster': '//image1.jpeg',
    'thumbnail': '//image1.jpeg',
    'linkPublishSocial': null,
    'linkStream': '["https://playlist.m3u8"]',
    'lastPullInfo': null,
    'lastPushInfo': null,
    'lastProcess': null,
    'eventType': null,
    'drm': '0',
    'dvr': '1',
    'createdAt': '2019-02-22T03:49:09.000Z',
    'updatedAt': '2019-02-22T03:49:09.000Z'
  }
};

describe('Live-Controller', function () {
  it('/GET: retrieve successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.live.retrieve({id: id});
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: retrieve missing parameters', async () => {
    nock(workspaceApiDomain)
      .get(`${path}`)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.live.retrieve();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.live.retrieve({id: id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.live.retrieve({id: id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.live.retrieve({id: id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.live.retrieve({id: id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.live.retrieve({id: id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.live.retrieve({id: id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.live.retrieve({id: id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
