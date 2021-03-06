const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://ap-southeast-1-api.uiza.co'
const path = '/api/public/v4/media/metadata?appId=your-app-id';
const uiza = require('../../../lib/uiza.js');
uiza.app_id('your-app-id');
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": [
    { 
      "id": "b8f2a6ec-d45f-4cc0-a32d-35ad0ad9f1b6",
      "name": "Folder sample 3",
      "description": "Folder description",
      "slug": "folder-sample-3",
      "type": "folder",
      "orderNumber": 3,
      "icon": "https://exemple.com/icon.png",
      "status": 1,
      "createdAt": "2019-02-20T07:24:32.000Z",
      "updatedAt": "2019-02-20T07:24:32.000",
    },
  ],
};

describe('Category-Controller', function () {
  it('/GET: list successfully', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.category.list();
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.category.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.category.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.category.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.category.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.category.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.category.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.category.list();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
