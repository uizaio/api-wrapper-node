const uiza = require('../lib/uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

/** create */
uiza.category.create({
  'name': 'Folder sample 3',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** retrieve */
uiza.category.retrieve('b8f2a6ec-d45f-4cc0-a32d-35ad0ad9f1b6').then((res) => console.log(res)).catch((err) => console.log(err));

/** list */
uiza.category.list().then((res) => console.log(res)).catch((err) => console.log(err));

/** update */
uiza.category.update({
  'id': 'c0d3e5f2-9ae7-4e46-94a2-29612d562db0',
  'name': 'Folder sample 312',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** delete */
uiza.category.delete('c0d3e5f2-9ae7-4e46-94a2-29612d562db0').then((res) => console.log(res)).catch((err) => console.log(err));

/** Create category relation */
uiza.category.create_relation({
  'entityId': 'c71965ac-8808-4854-8fc3-85a22ac9eb73',
  'metadataIds': ['689d3752-5515-4e35-993b-e02f370cf46c','32e8a1f4-e3b6-4369-a30d-60c6715896d1']
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** Delete category relation */
uiza.category.delete_relation({
  'entityId': 'c71965ac-8808-4854-8fc3-85a22ac9eb73',
  'metadataIds': ['689d3752-5515-4e35-993b-e02f370cf46c','32e8a1f4-e3b6-4369-a30d-60c6715896d1']
}).then((res) => console.log(res)).catch((err) => console.log(err));
