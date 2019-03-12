const uiza = require('../lib/uiza')('your-authorization-key');
uiza.setAppId('your-appId')

/** get */
uiza.entity.get({
  id: '797d4a02-cd33-40e3-912f-737cd6b3adda',
}).then((res) => console.log(res)).catch((err) => console.log(err));
