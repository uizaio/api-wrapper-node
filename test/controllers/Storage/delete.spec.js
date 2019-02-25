const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const id = 'cd003123-7ec9-4f3a-9d7c-f2de93e83e49';
const path = '/api/public/v3/media/storage';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const DELETE_DATA_RESPONSE = {
  "data": {
    "id": "cd003123-7ec9-4f3a-9d7c-f2de93e83e49"
  },
  "version": 3,
  "datetime": "2018-06-15T18:52:45.755Z",
}

describe('Storage-Controller', function () {
  it('/DELETE: delete successfully', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(200, {
        ...DELETE_DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.storage.remove({id});
    expect(result).eqls(DELETE_DATA_RESPONSE.data)
  });

  it('/DELETE: delete missing parameters', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.storage.remove({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE: unauthorized', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(401, {
        ...DELETE_DATA_RESPONSE,
        "code": 401,
      });

    const result = await uiza.storage.remove({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE: not found', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(404, {
        ...DELETE_DATA_RESPONSE,
        "code": 404,
      });

    const result = await uiza.storage.remove({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(422, {
        ...DELETE_DATA_RESPONSE,
        "code": 422,
      });

    const result = await uiza.storage.remove({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(500, {
        ...DELETE_DATA_RESPONSE,
        "code": 500,
      });

    const result = await uiza.storage.remove({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE: service is unable', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(503, {
        ...DELETE_DATA_RESPONSE,
        "code": 503,
      });

    const result = await uiza.storage.remove({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE: caused by the client', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(450, {
        ...DELETE_DATA_RESPONSE,
        "code": 450,
      });

    const result = await uiza.storage.remove({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE: server has encountered', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(501, {
        ...DELETE_DATA_RESPONSE,
        "code": 501,
      });

    const result = await uiza.storage.remove({
      'name': 'Test',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
