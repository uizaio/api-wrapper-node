const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');

/** create */
uiza.callback.create({
  'url': 'https://callback-url.uiza.co',
  'method': 'POST'
}).then((res) => console.log(res)).catch((err) => console.log(err));

// // /** retrieve */
uiza.callback.retrieve('1b1f97f9-9afd-46d1-a2e1-f3b3896374df').then((res) => console.log(res)).catch((err) => console.log(err));

// // /** update */
uiza.callback.update({
  'id': '1b1f97f9-9afd-46d1-a2e1-f3b3896374df',
  'url': 'https://callback-url.uiza.co',
  'method': 'GET'
}).then((res) => console.log(res)).catch((err) => console.log(err));

// // /** delete */
uiza.callback.delete('1b1f97f9-9afd-46d1-a2e1-f3b3896374df').then((res) => console.log(res)).catch((err) => console.log(err));