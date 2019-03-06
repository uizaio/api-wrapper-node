const expect = require('chai').expect;
const nock = require('nock');

const workspaceApiDomain = 'https://your-workspace-api-domain.uiza.co';
const start_date = '2018-11-01%2008:00';
const end_date = '2018-11-19%2014:00';
const metric = 'rebuffer_count';
const path = '/api/public/v3/analytic/entity/video-quality/total-line-v2';
const uiza = require('../../../lib/uiza.js')(workspaceApiDomain);
const errorMessages = require('../../../lib/utils/Errors')();

const DATA_RESPONSE = {
  "data": [
    {
      "date_time": 1542978000000,
      "rebuffer_count": 1.6666666666666667
    },
    {
      "date_time": 1543204800000,
      "rebuffer_count": 0.5
    },
    {
      "date_time": 1543215600000,
      "rebuffer_count": 5
    }
  ]
}

describe('Analytic-Controller', function () {
  it('/GET: get_total_line successfully', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`)
      .reply(200, {
        ...DATA_RESPONSE,
        "code": 200,
      });

    const result = await uiza.analytic.get_total_line({start_date, end_date, metric});
    expect(result).eqls(DATA_RESPONSE.data);
  });

  it('/GET: get_total_line missing parameters', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=undefined&end_date=undefined&metric=undefined`)
      .reply(400, {
        "code": 400,
      });

    const result = await uiza.analytic.get_total_line();
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: unauthorized', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`)
      .reply(401, {
        "code": 401,
      });

    const result = await uiza.analytic.get_total_line({start_date, end_date, metric});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: not found', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`)
      .reply(404, {
        "code": 404,
      });

    const result = await uiza.analytic.get_total_line({start_date, end_date, metric});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: wrong parameter', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`)
      .reply(422, {
        "code": 422,
      });

    const result = await uiza.analytic.get_total_line({start_date, end_date, metric});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: had a problem with our server', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`)
      .reply(500, {
        "code": 500,
      });

    const result = await uiza.analytic.get_total_line({start_date, end_date, metric});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: service is unable', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`)
      .reply(503, {
        "code": 503,
      });

    const result = await uiza.analytic.get_total_line({start_date, end_date, metric});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: caused by the client', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`)
      .reply(450, {
        "code": 450,
      });

    const result = await uiza.analytic.get_total_line({start_date, end_date, metric});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });

  it('/GET: server has encountered', async () => {
    nock(workspaceApiDomain)
      .get(`${path}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`)
      .reply(501, {
        "code": 501,
      });

    const result = await uiza.analytic.get_total_line({start_date, end_date, metric});
    expect(result.message).eq(errorMessages.getMessage(result.type))
  });
});
