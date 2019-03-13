const expect = require('chai').expect;
const nock = require('nock');

const id = 'd1781e62-2d2c-4e3c-b8de-e808e50ac845';
const path = '/api/public/v4/live/entity/dvr/convert-to-vod';
const workspaceApiDomain = 'https://stag-ap-southeast-1-api.uizadev.io'
const yourAuthorizationKey = 'uap-123456789-f3c977b7';
const uiza = require('../../../lib/uiza.js')(yourAuthorizationKey);
uiza.setAppId('123456789')
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  data: {
    id
  },
}

describe('LiveStreaming-Controller', function () {
  it('/POST: convert_to_vod successfully', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.live.convert_to_vod(id);
    expect(result).eqls({id})
  });

  it('/POST: convert_to_vod missing parameters', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.live.convert_to_vod({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: unauthorized', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.live.convert_to_vod({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: not found', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.live.convert_to_vod({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.live.convert_to_vod({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.live.convert_to_vod({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: service is unable', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.live.convert_to_vod({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: caused by the client', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.live.convert_to_vod({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: server has encountered', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.live.convert_to_vod({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
