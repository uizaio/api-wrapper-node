const expect = require('chai').expect;
const nock = require('nock');

const path = '/api/public/v4/live/entity';
const workspaceApiDomain = 'https://ap-southeast-1-api.uiza.co'
const yourAuthorizationKey = 'your-authorization';
const uiza = require('../../../lib/uiza.js');
uiza.authorization(yourAuthorizationKey);
uiza.app_id('your-app-id');

const errorMessages = require('../../../lib/utils/Errors')();

const POST_DATA_FOR_CREATING_LIVE = {
  'name': 'test event',
  'mode': 'push',
  'encode': 1,
  'dvr': 1,
  'description': 'This is for test event',
  'poster': '//image1.jpeg',
  'thumbnail': '//image1.jpeg',
  'linkStream': [
    'https://playlist.m3u8'
  ],
  'resourceMode': 'single'
}

describe('Live-Controller', function () {
  it('/POST: create successfully', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(200, {
        "data": {"id": "123"},
        "code": 200,
      });

    const result = await uiza.live.create({
      ...POST_DATA_FOR_CREATING_LIVE
    });
    expect(result).eqls({"id": "123"})
  });

  it('/POST: create missing parameters', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.live.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: unauthorized', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(401, {
        ...POST_DATA_FOR_CREATING_LIVE,
        "code": 401,
      });

    const result = await uiza.live.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: not found', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(404, {
        ...POST_DATA_FOR_CREATING_LIVE,
        "code": 404,
      });

    const result = await uiza.live.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(422, {
        ...POST_DATA_FOR_CREATING_LIVE,
        "code": 422,
      });

    const result = await uiza.live.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(500, {
        ...POST_DATA_FOR_CREATING_LIVE,
        "code": 500,
      });

    const result = await uiza.live.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: service is unable', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(503, {
        ...POST_DATA_FOR_CREATING_LIVE,
        "code": 503,
      });

    const result = await uiza.live.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: caused by the client', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(450, {
        ...POST_DATA_FOR_CREATING_LIVE,
        "code": 450,
      });

    const result = await uiza.live.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: server has encountered', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(501, {
        ...POST_DATA_FOR_CREATING_LIVE,
        "code": 501,
      });

    const result = await uiza.live.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
