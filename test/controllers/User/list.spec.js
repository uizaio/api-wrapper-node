const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const authorization = 'uap-123456123456-123456';
const uiza = require('../../../lib/uiza.js');
uiza.workspace_api_domain(workspaceApiDomain);
uiza.authorization(authorization);

const path = '/api/public/v3/admin/user';
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": [
    { 'id': 'f3421298-d2c5-4cef-8245-30111b03d1d6',
      'isAdmin': 0,
      'username': 'ef1f5b77-617a-49ac-9562-35a87d3821d4',
      'email': '214a3e8b-3600-4b23-b5a6-ec41f81ff33b@gmail.com',
      'avatar': 'https://static.uiza.io/uiza_logo_128.png',
      'fullName': 'ecfd28e5-0c87-41b1-a32d-fce2e741d9cd',
      'updatedAt': '2019-02-27T00:00:00.000Z',
      'createdAt': '2019-02-27T08:18:24.000Z',
      'status': 1 },
    { 'id': '9e4df7c2-111d-4107-9c2e-6d2cb13c06f0',
      'isAdmin': 0,
      'username': 'user_test002',
      'email': 'user_test002@uiza.io',
      'avatar': 'https://exemple.com/avatar.jpeg',
      'fullName': 'User Test',
      'updatedAt': '2019-02-26T09:12:26.000Z',
      'createdAt': '2019-02-26T09:12:26.000Z',
      'status': 1
    }
  ]
};

describe('User-Controller', function () {
  it('/GET: list successfully', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.user.list();
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.user.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.user.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.user.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.user.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.user.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.user.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.user.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
