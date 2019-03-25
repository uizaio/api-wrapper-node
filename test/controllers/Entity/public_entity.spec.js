const expect = require('chai').expect;
var nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const authorization = 'uap-123456123456-123456';
const uiza = require('../../../lib/uiza.js');
uiza.workspace_api_domain(workspaceApiDomain);
uiza.authorization(authorization);

const errorMessages = require('../../../lib/utils/Errors');
const pathURL = '/api/public/v3/media/entity/publish';

var dataResponseSuccess = { 
  data: { 
    message: 'Your entity started publish, check process status with this entity ID',
    entityId: '1a6600c0-6ecd-4ca9-9ee1-3125e7c9d9f8' 
  },
  version: 3,
  datetime: '2019-02-15T03:07:12.067Z',
  policy: 'public',
  requestId: 'dd30271f-a300-4965-aab3-f1d2359f466c',
  serviceName: 'api',
  message: 'OK',
  code: 200,
  type: 'SUCCESS'
}

var dataResponseFail = { 
  retryable: false,
  version: 3,
  datetime: '2019-02-15T03:16:31.242Z',
  policy: 'public',
  requestId: '8b2d6dc2-de8e-4885-a508-e24df709ccc2',
  serviceName: 'api'
}

describe('Entity-Controller', function () {
  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(200, dataResponseSuccess);
    });

    it('Status 200 - Everything worked as expected.', async () => {
      const result = await uiza.entity.publish({
        'id': '16ab25d3-fd0f-4568-8aa0-0339bbfd674f',
      });
      expect(result).eqls(dataResponseSuccess.data);
    });
  });

  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(400, {
          code: 400,
          type: 'BAD_REQUEST',
          data: 'BAD_REQUEST',
          message: 'Bad Request',
          ...dataResponseFail
        });
    });

    it('Status 400 - The request was unacceptable, often due to missing a required parameter.', async () => {
      const result = await uiza.entity.publish();

      expect(result.message).eq(errorMessages().getMessage(result.type))
    });
  });

  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(401, {
          code: 401,
          message: 'Unauthorized',
          ...dataResponseFail
        });
    });

    it('Status 401 - No valid API key provided.', async () => {
      const result = await uiza.entity.publish();

      expect(result.message).eq(errorMessages().getMessage(result.type))
    });
  });

  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(404, {
          code: 404,
          message: 'Not Found',
          ...dataResponseFail
        });
    });

    it("Status 404 - The requested resource doesn't exist.", async () => {
      const result = await uiza.entity.publish();

      expect(result.message).eq(errorMessages().getMessage(result.type))
    });
  });

  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(422, {
          code: 422,
          message: 'Unprocessable',
          ...dataResponseFail
        });
    });

    it('Status 422 - The syntax of the request is correct (often cause of wrong parameter)', async () => {
      const result = await uiza.entity.publish();

      expect(result.message).eq(errorMessages().getMessage(result.type))
    });
  });

  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(500, {
          code: 500,
          message: 'Internal Server Error',
          ...dataResponseFail
        });
    });

    it('Status 500 - We had a problem with our server. Try again later.', async () => {
      const result = await uiza.entity.publish();

      expect(result.message).eq(errorMessages().getMessage(result.type))
    });
  });

  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(503, {
          code: 503,
          message: 'Service Unavailable',
          ...dataResponseFail
        });
    });

    it('Status 503 -The server is overloaded or down for maintenance.', async () => {
      const result = await uiza.entity.publish();

      expect(result.message).eq(errorMessages().getMessage(result.type))
    });
  });

  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(444, {
          code: 444,
          message: 'Client Error',
          ...dataResponseFail
        });
    });

    it('Status 4xx - The error seems to have been caused by the client', async () => {
      const result = await uiza.entity.publish();

      expect(result.message).eq(errorMessages().getMessage(result.type))
    });
  });

  describe('/POST Public entity to CDN', function () {
    beforeEach(() => {
      nock(workspaceApiDomain)
        .post(pathURL)
        .reply(555, {
          code: 555,
          message: 'Server Error',
          ...dataResponseFail
        });
    });

    it('Status 5xx - The server is aware that it has encountered an error', async () => {
      const result = await uiza.entity.publish();

      expect(result.message).eq(errorMessages().getMessage(result.type))
    });
  });
});
