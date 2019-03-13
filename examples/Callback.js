const uiza = require('../lib/uiza')('your-authorization-key');
uiza.setAppId('your-appId')

/** create */
uiza.callback.create({
  'url': 'https://abc.com',
  'method': 'POST'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** retrieve */
uiza.callback.retrieve().then((res) => console.log(res)).catch((err) => console.log(err));

/** update */
uiza.callback.update({
  'id': 'dab7db3d-450f-47ad-affa-b687d628a5be',
  'url': 'https://abc.co',
  'method': 'GET'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** delete */
uiza.callback.delete({
  id: '2dd3632a-e5d8-4b5f-95f8-265ada329a64'
}).then((res) => console.log(res)).catch((err) => console.log(err));
