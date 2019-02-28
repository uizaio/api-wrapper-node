const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const start_date = '2018-11-01%2008:00';
const end_date = '2018-11-19%2014:00';
const path = '/api/public/v3/analytic/entity/video-quality/line';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": [
    {
      "day": 1541548800000,
      "total_view": 4
    },
    {
      "day": 1541635200000,
      "total_view": 5
    },
  ]
}

describe('Analytic-Controller', function () {
  it('/GET: get_line successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.analytic.get_line(start_date, end_date);
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: get_line missing parameters', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=undefined&end_date=undefined`)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.analytic.get_line();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.analytic.get_line(start_date, end_date);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.analytic.get_line(start_date, end_date);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.analytic.get_line(start_date, end_date);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.analytic.get_line(start_date, end_date);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.analytic.get_line(start_date, end_date);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.analytic.get_line(start_date, end_date);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.analytic.get_line(start_date, end_date);
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
