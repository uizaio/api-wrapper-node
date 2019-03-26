const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://stag-ap-southeast-1-api.uizadev.io'
const data = {
  'entityId': 'c71965ac-8808-4854-8fc3-85a22ac9eb73',
  'metadataIds': ['689d3752-5515-4e35-993b-e02f370cf46c','32e8a1f4-e3b6-4369-a30d-60c6715896d1']
};
const path = '/api/public/v4/media/entity/related/metadata';
const yourAuthorizationKey = 'your-authorization';
const uiza = require('../../../lib/uiza.js');
uiza.authorization(yourAuthorizationKey);
uiza.app_id('your-app-id');
const errorMessages = require('../../../lib/utils/Errors')();

const DELETE_DATA_RESPONSE = {
  "data": [
    { id: '765f7be1-eab3-4c32-a55f-d688c1fc8cb4',
      entityId: 'c71965ac-8808-4854-8fc3-85a22ac9eb73',
      metadataId: '689d3752-5515-4e35-993b-e02f370cf46c'
    },
    { 
      id: '43cdd14f-6702-4296-bbe6-306b29daf99c',
      entityId: 'c71965ac-8808-4854-8fc3-85a22ac9eb73',
      metadataId: '32e8a1f4-e3b6-4369-a30d-60c6715896d1'
    }
  ]
}

describe('Category-Controller', function () {
  it('/DELETE: delete_relation successfully', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(200, {
        ...DELETE_DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.category.delete_relation(data);
    expect(result).eqls(DELETE_DATA_RESPONSE.data)
  });

  it('/DELETE: delete_relation missing parameters', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.category.delete_relation({
      'name': 'Test Video',
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

    const result = await uiza.category.delete_relation({
      'name': 'Test Video',
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

    const result = await uiza.category.delete_relation({
      'name': 'Test Video',
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

    const result = await uiza.category.delete_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE:  delete_relation had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(500, {
        ...DELETE_DATA_RESPONSE,
        "code": 500,
      });

    const result = await uiza.category.delete_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/DELETE: delete_relation service is unable', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(503, {
        ...DELETE_DATA_RESPONSE,
        "code": 503,
      });

    const result = await uiza.category.delete_relation({
      'name': 'Test Video',
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

    const result = await uiza.category.delete_relation({
      'name': 'Test Video',
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

    const result = await uiza.category.delete_relation({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
