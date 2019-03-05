const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');

/** get_total_line */
uiza.analytic.get_total_line('2019-02-28%2000:00', '2019-03-01%2023:00', 'rebuffer_count').then((res) => console.log(res)).catch((err) => console.log(err));

/** get_type */
uiza.analytic.get_type('2019-01-01', '2019-03-01', 'country').then((res) => console.log(res)).catch((err) => console.log(err));

/** get_line */
uiza.analytic.get_line('2019-01-01', '2019-03-01', 'rebuffer_count').then((res) => console.log(res)).catch((err) => console.log(err));
