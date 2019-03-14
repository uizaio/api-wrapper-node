const uiza = require('../lib/uiza')('your-authorization-key');
uiza.setAppId('your-appId')

/** retrieve */
uiza.user.retrieve({
  id: '5167cf93-6fcd-454d-80a7-92f1b2d81fd4'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** list */
uiza.user.list().then((res) => console.log(res)).catch((err) => console.log(err));

/** update */
uiza.user.update({
  'id': '6a597947-83d0-4288-aa26-c32751e099f8',
  'status': 0,
  'name': 'user_test_110',
  'avatar': 'https://exemple.com/avatar.jpeg',
  'dob': '2018-10-05',
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** Update password */
uiza.user.change_password({
  'userId': 'd4eb01ad-3384-49b2-8b89-9bb685d9abfc',
  'oldPassword': 'Huulockfc1',
  'newPassword': 'Huulockfc1'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** Log Out */
uiza.user.log_out().then((res) => console.log(res)).catch((err) => console.log(err));
