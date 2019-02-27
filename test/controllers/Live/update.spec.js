const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/live/entity';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const PUT_DATA_FOR_UPDATING_VIDEO = {
  'id': '1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab',
  'name': 'live test',
  'mode': 'pull',
  'encode': 0,
  'dvr': 1,
  'resourceMode': 'single'
}

describe('Live-Controller', function () {
  it('/PUT: update successfully', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(200, {
        ...PUT_DATA_FOR_UPDATING_VIDEO,
        "code": 200,
      });

    const result = await uiza.live.update({
      ...PUT_DATA_FOR_UPDATING_VIDEO
    });
    expect(result.code).eq(200)
  });

  it('/PUT: update missing parameters', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.live.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: unauthorized', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(401, {
        ...PUT_DATA_FOR_UPDATING_VIDEO,
        "code": 401,
      });

    const result = await uiza.live.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: not found', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(404, {
        ...PUT_DATA_FOR_UPDATING_VIDEO,
        "code": 404,
      });

    const result = await uiza.live.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(422, {
        ...PUT_DATA_FOR_UPDATING_VIDEO,
        "code": 422,
      });

    const result = await uiza.live.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(500, {
        ...PUT_DATA_FOR_UPDATING_VIDEO,
        "code": 500,
      });

    const result = await uiza.live.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: service is unable', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(503, {
        ...PUT_DATA_FOR_UPDATING_VIDEO,
        "code": 503,
      });

    const result = await uiza.live.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: caused by the client', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(450, {
        ...PUT_DATA_FOR_UPDATING_VIDEO,
        "code": 450,
      });

    const result = await uiza.live.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: server has encountered', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(501, {
        ...PUT_DATA_FOR_UPDATING_VIDEO,
        "code": 501,
      });

    const result = await uiza.live.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
