const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');

/** create */
uiza.user.create({
  'status': 1,
  'username': 'user_test_123',
  'email': 'user_test@uiza.io',
  'fullname': 'User Test',
  'avatar': 'https://exemple.com/avatar.jpeg',
  'dob': '05/15/2018',
  'gender': 0,
  'password': 'FMpsr<4[dGPu?B#u',
  'isAdmin': 0
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** retrieve */
uiza.user.retrieve('23b0fa8e-d6db-4e8b-bd00-48dcaffda5cc').then((res) => console.log(res)).catch((err) => console.log(err));

/** list */
uiza.user.list().then((res) => console.log(res)).catch((err) => console.log(err));

/** update */
uiza.user.update({
  'id': '9e4df7c2-111d-4107-9c2e-6d2cb13c06f0',
  'status': 0,
  'username': 'user_test_110',
  'email': 'user_test@uiza.io',
  'avatar': 'https://exemple.com/avatar.jpeg',
  'fullname': 'User Test',
  'dob': '05/15/2018',
  'gender': 0,
  'password': '123456789',
  'isAdmin': 1
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** delete */
uiza.user.delete('9e4df7c2-111d-4107-9c2e-6d2cb13c06f0').then((res) => console.log(res)).catch((err) => console.log(err));

/** Update password */
uiza.user.change_password({
  'id': 'a6b039cf-4f1e-4b3a-bece-8a5f800496df',
  'oldPassword': '123456789',
  'newPassword': '987654321'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** Log Out */
uiza.user.log_out().then((res) => console.log(res)).catch((err) => console.log(err));
