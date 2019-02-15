const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const path = '/api/public/v3/admin/app/config/aws';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

describe('Entity-Controller', function () {
  it('/GET: get_aws_upload_key successfully', async () => {
    nock(workspaceApiDomain)
      .get(path)
      .reply(200, {
        "data": {
          "temp_expire_at": 1533658598,
          "temp_access_id": "ASIAV*******GPHO2DTZ",
          "bucket_name": "uiza****-storage-ap-southeast-1-01/upload-temp/****ff4ad74a5195f4c/",
          "temp_session_token": "FQoGZXIvYXdzEKb//////////wEaDM3rrospIPdBVVULUiKQBHd6H6CNOlRc+xBXDa3Nw8gEymmC/XjDYjIScgx9wJ4QBWwQPwizxLn4AdoLgnYAXVfuGZgOVB6KLHlUZ09yE1IZtN1J3zeVnOaaLnCRSg2lWvwGos6pcLnvzUEGC9FevGfWKEjIQZO6z57BsW/k+1edwNUJpH7FNzmzF5/zid3+wDdzEd2mP4Y0OVdAd6l0oemndXsOQ0wQ2jYre2DXiQ+JRFOE696vpEUqQMm8dDStctLIKPG5WAeKguue2eorTF5fSc43qu/tzecaKGL2UMQVfIAu5wfT6S4uAxOpo0jLuwxqqlEbat6wIlpWCyESpFEoja7qpVnqG2cyAToSnvus2m82cT6WBFyhc6wmetYJDiTAZkOrMYm8yhdqwlb7jd/7p9WVjZOaY8BPB4eZ/tFWrKAZXenX0u5nFumwa2Pvv6TZQqORqLvoybkJnWAZtziK/Xlj+7GxKGep7l6X7/T/1wEIvlORBLLZ3qMFx6cEvhVAx8Zo+5MMHlUmgSLaRAL6kn9F8X6n2nvKGX3T36KXMEBeCVKWEhCUXFbJxz3otBUjaCzpYFuH5aM0DbotqrkNNoOd9oilH0d5oH5llH6lY6Qp1ZjzIHdMV/DCWmMeDqXgNcPakyX5d/zf4D+0LadhikLWctYQkJhoVCqkBCsc+glzk79tEER213nfjPr2i6+qQpfGYeoz8zcdaINRaiimuqTbBQ==",
          "region_name": "ap-southeast-1",
          "temp_access_secret": "dp****cx2mE2lZxsSq7kV++vWSL6RNatAhbqc"
        },
        "version": 3,
        "datetime": "2018-08-07T04:16:39.138Z",
        "code": 200,
      });

    const result = await uiza.entity.get_aws_upload_key();
    expect(result.code).eq(200)
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
