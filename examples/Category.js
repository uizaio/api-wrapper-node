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

/** retrieve */
uiza.category.retrieve({
  id: 'f576960c-736f-4bd2-895e-a2f5cf121c88',
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** list */
uiza.category.list().then((res) => console.log(res)).catch((err) => console.log(err));

/** update */
uiza.category.update({
  'id': 'f42951b3-aee5-4cb3-9a10-172985c734b2',
  'name': 'Folder sample 312',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** delete */
uiza.category.delete({
  id: 'f42951b3-aee5-4cb3-9a10-172985c734b2',
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** Create category relation */
uiza.category.create_relation({
  'entityId': '797d4a02-cd33-40e3-912f-737cd6b3adda',
  'metadataIds': ['00869941-67b0-4781-b194-f9b6615758e9','00869941-67b0-4781-b194-f9b6615758e9']
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** Delete category relation */
uiza.category.delete_relation({
  'entityId': '797d4a02-cd33-40e3-912f-737cd6b3adda',
  'metadataIds': ['00869941-67b0-4781-b194-f9b6615758e9','00869941-67b0-4781-b194-f9b6615758e9']
}).then((res) => console.log(res)).catch((err) => console.log(err));