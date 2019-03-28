const expect = require('chai').expect;
const nock = require('nock');


const workspaceApiDomain = 'https://ap-southeast-1-api.uiza.co';
const path = '/api/public/v4/media/entity';
const yourAuthorizationKey = 'your-authorization';
const uiza = require('../../../lib/uiza.js');
uiza.authorization(yourAuthorizationKey);
uiza.app_id('your-app-id');

const id = 'd1781e62-2d2c-4e3c-b8de-e808e50ac845';
const errorMessages = require('../../../lib/utils/Errors')();

const DELETE_DATA_RESPONSE = {
  "data": {
    "id": "dd934a87-3342-41fa-8cdf-6381b6d92105"
  },
  "version": 3,
  "datetime": "2018-06-15T18:52:45.755Z",
  'name': '--Title edited--',
}

describe('Entity-Controller', function () {
  it('/DELETE: delete successfully', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(200, {
        ...DELETE_DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.entity.delete({id});
    expect(result).eqls(DELETE_DATA_RESPONSE.data)
  });

  it('/DELETE: delete missing parameters', async () => {
    nock(workspaceApiDomain)
      .delete(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.entity.delete({
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

    const result = await uiza.entity.delete({
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

    const result = await uiza.entity.delete({
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

    const result = await uiza.entity.delete({
      'name': 'Test Video',
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

    const result = await uiza.entity.delete({
      'name': 'Test Video',
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

    const result = await uiza.entity.delete({
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

    const result = await uiza.entity.delete({
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

    const result = await uiza.entity.delete({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
