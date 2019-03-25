const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const authorization = 'uap-123456123456-123456';
const uiza = require('../../../lib/uiza.js');
uiza.workspace_api_domain(workspaceApiDomain);
uiza.authorization(authorization);

const start_date = '2018-11-01%2008:00';
const end_date = '2018-11-19%2014:00';
const type_filter = 'country';
const path = '/api/public/v3/analytic/entity/video-quality/type';
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": [
    {
      "name": "Vietnam",
      "total_view": 15,
      "percentage_of_view": 0.625
    },
    {
        "name": "Other",
        "total_view": 9,
        "percentage_of_view": 0.375
    }
  ]
}

describe('Analytic-Controller', function () {
  it('/GET: get_type successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.analytic.get_type({start_date, end_date, type_filter});
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: get_type missing parameters', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=undefined&end_date=undefined&type_filter=undefined`)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.analytic.get_type();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.analytic.get_type({start_date, end_date, type_filter});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.analytic.get_type({start_date, end_date, type_filter});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.analytic.get_type({start_date, end_date, type_filter});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.analytic.get_type({start_date, end_date, type_filter});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.analytic.get_type({start_date, end_date, type_filter});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.analytic.get_type({start_date, end_date, type_filter});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.analytic.get_type({start_date, end_date, type_filter});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
