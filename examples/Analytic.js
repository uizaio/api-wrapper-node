const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');

/** get_total_line */
uiza.analytic.get_total_line('2018-11-01%2008:00', '2018-11-19%2014:00', 'rebuffer_count').then((res) => console.log(res)).catch((err) => console.log(err));

/** get_type */
uiza.analytic.get_type('2018-11-01%2008:00', '2018-11-19%2014:00', 'country').then((res) => console.log(res)).catch((err) => console.log(err));

/** get_line */
uiza.analytic.get_line('2018-11-01%2008:00', '2018-11-19%2014:00').then((res) => console.log(res)).catch((err) => console.log(err));
