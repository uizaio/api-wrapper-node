const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://stag-ap-southeast-1-api.uizadev.io';
const path = '/api/public/v4/media/entity/publish/status?appId=123';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
uiza.setAppId('123')

const id = '123';

const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": {
    "temp_expire_at": 1533658598,
    "temp_access_id": "ASIAV*******GPHO2DTZ",
    "bucket_name": "uiza****-storage-ap***ff4ad74a5195f4c/",
    "temp_session_token": "FQoGZXIvYXdbBQ==",
    "region_name": "ap-southeast-1",
    "temp_access_secret": "dp****cx2mE2lZxsSq7kV++vWSL6RNatAhbqc"
  },
  "version": 3,
  "datetime": "2018-08-07T04:16:39.138Z",
};

describe('Entity-Controller', function () {
  it('/GET: get_status_publish successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.entity.get_status_publish({id});
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.entity.get_status_publish({id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: get_status_publish missing parameters', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=undefined`)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.entity.get_status_publish();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.entity.get_status_publish({id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.entity.get_status_publish({id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.entity.get_status_publish({id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.entity.get_status_publish({id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.entity.get_status_publish({id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}&id=${id}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.entity.get_status_publish({id});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
