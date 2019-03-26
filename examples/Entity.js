const uiza = require('../lib/uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

/** get */
uiza.entity.retrieve({
  id: '7c754932-d264-4412-8a7c-a19d0caef79f',
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** list */
uiza.entity.list().then((res) => console.log(res)).catch((err) => console.log(err));

/** create */
uiza.entity.create({
  name: 'Ahihi',
  inputType: 's3'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** update */
uiza.entity.update({
  id: '7c754932-d264-4412-8a7c-a19d0caef79f',
  name: 'Name updated'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** publish */
uiza.entity.publish({
  id: '7c754932-d264-4412-8a7c-a19d0caef79f'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** get_status_publish */
uiza.entity.get_status_publish({
  id: '7c754932-d264-4412-8a7c-a19d0caef79f',
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** get_aws_upload_key */
uiza.entity.get_aws_upload_key().then((res) => console.log(res)).catch((err) => console.log(err));

/** delete */
uiza.entity.delete({
  id: '7c754932-d264-4412-8a7c-a19d0caef79f',
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** search */
uiza.entity.search({
  keyword: 'python',
}).then((res) => console.log(res)).catch((err) => console.log(err));