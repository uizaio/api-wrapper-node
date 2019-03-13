const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://stag-ap-southeast-1-api.uizadev.io'
const path = '/api/public/v4/media/storage';
const yourAuthorizationKey = 'uap-123456789-f3c977b7';
const uiza = require('../../../lib/uiza.js')(yourAuthorizationKey);
uiza.setAppId('123456789')
const errorMessages = require('../../../lib/utils/Errors')();

const POST_DATA_FOR_ADDING_A_STORAGE = {
  'name': 'axon',
  'description': 'axon of Uiza, use for transcode',
  'storageType': 'ftp',
  'host': 'axon-example.uiza.io',
  'username': 'uiza',
  'password': '=59x@LPsd+w7qW',
  'port': 21,
}

describe('Storage-Controller', function () {
  it('/POST: add successfully', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(200, {
        "data": {"id": "123"},
        "code": 200,
      });

    const result = await uiza.storage.add({
      ...POST_DATA_FOR_ADDING_A_STORAGE
    });
    expect(result).eqls({"id": "123"})
  });

  it('/POST: create missing parameters', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.storage.add({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: unauthorized', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(401, {
        ...POST_DATA_FOR_ADDING_A_STORAGE,
        "code": 401,
      });

    const result = await uiza.storage.add({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: not found', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(404, {
        ...POST_DATA_FOR_ADDING_A_STORAGE,
        "code": 404,
      });

    const result = await uiza.storage.add({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(422, {
        ...POST_DATA_FOR_ADDING_A_STORAGE,
        "code": 422,
      });

    const result = await uiza.storage.add({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(500, {
        ...POST_DATA_FOR_ADDING_A_STORAGE,
        "code": 500,
      });

    const result = await uiza.storage.add({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: service is unable', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(503, {
        ...POST_DATA_FOR_ADDING_A_STORAGE,
        "code": 503,
      });

    const result = await uiza.storage.add({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: caused by the client', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(450, {
        ...POST_DATA_FOR_ADDING_A_STORAGE,
        "code": 450,
      });

    const result = await uiza.storage.add({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: server has encountered', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(501, {
        ...POST_DATA_FOR_ADDING_A_STORAGE,
        "code": 501,
      });

    const result = await uiza.storage.add({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
