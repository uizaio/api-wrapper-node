const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/admin/user';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const PUT_DATA_FOR_UPDATING_USER = {
  'id': '9e4df7c2-111d-4107-9c2e-6d2cb13c06f0',
  'status': 0,
  'username': 'user_test_110',
  'email': 'user_test@uiza.io',
  'avatar': 'https://exemple.com/avatar.jpeg',
  'fullname': 'User Test',
  'dob': '05/15/2018',
  'gender': 0,
  'password': '123456789',
  'isAdmin': 1
}

describe('User-Controller', function () {
  it('/PUT: update successfully', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(200, {
        ...PUT_DATA_FOR_UPDATING_USER,
        "code": 200,
      });

    const result = await uiza.user.update({
      ...PUT_DATA_FOR_UPDATING_USER
    });
    expect(result.code).eq(200)
  });

  it('/PUT: update missing parameters', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.user.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: unauthorized', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(401, {
        ...PUT_DATA_FOR_UPDATING_USER,
        "code": 401,
      });

    const result = await uiza.user.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: not found', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(404, {
        ...PUT_DATA_FOR_UPDATING_USER,
        "code": 404,
      });

    const result = await uiza.user.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(422, {
        ...PUT_DATA_FOR_UPDATING_USER,
        "code": 422,
      });

    const result = await uiza.user.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(500, {
        ...PUT_DATA_FOR_UPDATING_USER,
        "code": 500,
      });

    const result = await uiza.user.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: service is unable', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(503, {
        ...PUT_DATA_FOR_UPDATING_USER,
        "code": 503,
      });

    const result = await uiza.user.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: caused by the client', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(450, {
        ...PUT_DATA_FOR_UPDATING_USER,
        "code": 450,
      });

    const result = await uiza.user.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/PUT: server has encountered', async () => {
    nock(workspaceApiDomain)
      .put(path)
      .reply(501, {
        ...PUT_DATA_FOR_UPDATING_USER,
        "code": 501,
      });

    const result = await uiza.user.update({
      'name': 'Test Video',
    });
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
