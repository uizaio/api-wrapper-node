const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/media/entity';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const POST_DATA_FOR_CREATING_VIDEO = {
  'name': 'Test Video',
  'url': 'https://example.com/video.mp4',
  'inputType': 'http',
  'description': 'test',
}

describe('Entity-Controller', function () {
  it('/POST: create successfully', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(200, {
        ...POST_DATA_FOR_CREATING_VIDEO,
        "code": 200,
      });

    const result = await uiza.entity.create({
      ...POST_DATA_FOR_CREATING_VIDEO
    });
    expect(result.code).eq(200)
  });

  it('/POST: create missing parameters', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.entity.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: unauthorized', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(401, {
        ...POST_DATA_FOR_CREATING_VIDEO,
        "code": 401,
      });

    const result = await uiza.entity.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: not found', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(404, {
        ...POST_DATA_FOR_CREATING_VIDEO,
        "code": 404,
      });

    const result = await uiza.entity.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(422, {
        ...POST_DATA_FOR_CREATING_VIDEO,
        "code": 422,
      });

    const result = await uiza.entity.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(500, {
        ...POST_DATA_FOR_CREATING_VIDEO,
        "code": 500,
      });

    const result = await uiza.entity.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: service is unable', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(503, {
        ...POST_DATA_FOR_CREATING_VIDEO,
        "code": 503,
      });

    const result = await uiza.entity.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: caused by the client', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(450, {
        ...POST_DATA_FOR_CREATING_VIDEO,
        "code": 450,
      });

    const result = await uiza.entity.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: server has encountered', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(501, {
        ...POST_DATA_FOR_CREATING_VIDEO,
        "code": 501,
      });

    const result = await uiza.entity.create({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
