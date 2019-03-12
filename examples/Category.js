const uiza = require('../lib/uiza')('your-authorization-key');
uiza.setAppId('your-appId')

/** create */
uiza.category.create({
  'name': 'Folder sample',
  'description': 'Folder description',
  'slug': null,
  'type': 'folder',
  'orderNumber': 1,
  'icon': 'https://exemple.com/icon.png',
  'status': null,
}).then((res) => console.log(res)).catch((err) => console.log(err));
