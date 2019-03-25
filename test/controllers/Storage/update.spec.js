const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const authorization = 'uap-123456123456-123456';
const uiza = require('../../../lib/uiza.js');
uiza.workspace_api_domain(workspaceApiDomain);
uiza.authorization(authorization);

const path = '/api/public/v3/media/storage';
const errorMessages = require('../../../lib/utils/Errors')();

const PUT_DATA_FOR_UPDATING_STORAGE = {
  'id': '03e6a059-c6d2-440c-a653-1e309918c792',
  'name': 'FTP Uiza',
  'description': 'FTP of Uiza, use for transcode',
  'storageType': 'ftp',
  'host': 'ftp-example.uiza.io',
  'username': 'uiza',
  'password': '=59x@LPsd+w7qW',
  'port': 21
}

describe('Storage-Controller', function () {
  it('/PUT: update successfully', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(200, {
        ...PUT_DATA_FOR_UPDATING_STORAGE,
        "code": 200,
      });

    const result = await uiza.storage.update({
      ...PUT_DATA_FOR_UPDATING_STORAGE
    });
    expect(result.code).eq(200)
  });

  it('/PUT: update missing parameters', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.storage.update({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: unauthorized', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(401, {
        ...PUT_DATA_FOR_UPDATING_STORAGE,
        "code": 401,
      });

    const result = await uiza.storage.update({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: not found', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(404, {
        ...PUT_DATA_FOR_UPDATING_STORAGE,
        "code": 404,
      });

    const result = await uiza.storage.update({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(422, {
        ...PUT_DATA_FOR_UPDATING_STORAGE,
        "code": 422,
      });

    const result = await uiza.storage.update({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(500, {
        ...PUT_DATA_FOR_UPDATING_STORAGE,
        "code": 500,
      });

    const result = await uiza.storage.update({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: service is unable', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(503, {
        ...PUT_DATA_FOR_UPDATING_STORAGE,
        "code": 503,
      });

    const result = await uiza.storage.update({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: caused by the client', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(450, {
        ...PUT_DATA_FOR_UPDATING_STORAGE,
        "code": 450,
      });

    const result = await uiza.storage.update({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: server has encountered', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(501, {
        ...PUT_DATA_FOR_UPDATING_STORAGE,
        "code": 501,
      });

    const result = await uiza.storage.update({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
