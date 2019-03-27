const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://stag-ap-southeast-1-api.uizadev.io'
const path = '/api/public/v4/media/entity/related/metadata';
const yourAuthorizationKey = 'your-authorization';
const uiza = require('../../../lib/uiza.js');
uiza.authorization(yourAuthorizationKey);
uiza.app_id('your-app-id');
const errorMessages = require('../../../lib/utils/Errors')();

const POST_DATA_FOR_CREATING_CATEGORY = {
  'entityId': '16ab25d3-fd0f-4568-8aa0-0339bbfd674f',
  'metadataIds': ['095778fa-7e42-45cc-8a0e-6118e540b61d','e00586b9-032a-46a3-af71-d275f01b03cf']
}

describe('Category-Controller', function () {
  it('/POST: create_relation successfully', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(200, {
        "data": {"id": "123"},
        "code": 200,
      });

    const result = await uiza.category.create_relation({
      ...POST_DATA_FOR_CREATING_CATEGORY
    });
    expect(result).eqls({"id": "123"})
  });

  it('/POST: create_relation missing parameters', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.category.create_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: unauthorized', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(401, {
        ...POST_DATA_FOR_CREATING_CATEGORY,
        "code": 401,
      });

    const result = await uiza.category.create_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: not found', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(404, {
        ...POST_DATA_FOR_CREATING_CATEGORY,
        "code": 404,
      });

    const result = await uiza.category.create_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(422, {
        ...POST_DATA_FOR_CREATING_CATEGORY,
        "code": 422,
      });

    const result = await uiza.category.create_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(500, {
        ...POST_DATA_FOR_CREATING_CATEGORY,
        "code": 500,
      });

    const result = await uiza.category.create_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: service is unable', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(503, {
        ...POST_DATA_FOR_CREATING_CATEGORY,
        "code": 503,
      });

    const result = await uiza.category.create_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: caused by the client', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(450, {
        ...POST_DATA_FOR_CREATING_CATEGORY,
        "code": 450,
      });

    const result = await uiza.category.create_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/POST: server has encountered', async () => {
    nock(workspaceApiDomain)
      .post(path)
      .reply(501, {
        ...POST_DATA_FOR_CREATING_CATEGORY,
        "code": 501,
      });

    const result = await uiza.category.create_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
