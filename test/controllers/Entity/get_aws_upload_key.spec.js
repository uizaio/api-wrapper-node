const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/admin/app/config/aws';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": {
    "temp_expire_at": 1533658598,
    "temp_access_id": "ASIAV*******GPHO2DTZ",
    "bucket_name": "uiza****-storaga5195f4c/",
    "temp_session_token": "FQoGZBQ==",
    "region_name": "ap-southeast-1",
    "temp_access_secret": "dp****cx2mE2lZxsSq7kV++vWSL6RNatAhbqc"
  },
  "version": 3,
  "datetime": "2018-08-07T04:16:39.138Z",
};

describe('Entity-Controller', function () {
  it('/GET: get_aws_upload_key successfully', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
