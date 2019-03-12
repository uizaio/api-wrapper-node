const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');
uiza.setAppId('d6342a7b4a6c40d2b851a54a4442ea83')
// /** get */
uiza.entity.get({
  id: '797d4a02-cd33-40e3-912f-737cd6b3adda'
}).then((res) => console.log(res)).catch((err) => console.log(err));
