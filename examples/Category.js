const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');

/** create */
uiza.category.create({
  'name': 'Folder sample 2',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
}).then((res) => console.log(res)).catch((err) => console.log(err));
