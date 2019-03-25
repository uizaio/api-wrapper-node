const uiza = require('../lib/uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

/** get_total_line */
uiza.analytic.get_total_line({
  'start_date': '2019-02-28 00:00',
  'end_date': '2019-03-01 23:00',
  'metric': 'rebuffer_count'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** get_type */
uiza.analytic.get_type({
  'start_date': '2019-01-01',
  'end_date': '2019-03-01',
  'type_filter': 'country'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** get_line */
uiza.analytic.get_line({
  'start_date': '2019-01-01',
  'end_date': '2019-03-01',
  'type': 'rebuffer_count'
}).then((res) => console.log(res)).catch((err) => console.log(err));
