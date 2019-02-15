const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');

/** create */
uiza.entity.create({
  'name': 'Sample Video',
  'url': 'https://example.com/video.mp4',
  'inputType': 'http',
  'description': 'tes'
}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** retrieve */
uiza.entity.retrieve('d1781e62-2d2c-4e3c-b8de-e808e50ac845').then((res) => console.log(res)).catch((err) => console.log(err));


// /** list */
uiza.entity.list().then((res) => console.log(res)).catch((err) => console.log(err));

// /** update */
uiza.entity.update({
  'id': '16de511f-5493-400a-9250-2d3b38b1d0be',
  'name': '--Title edited--',
}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** delete */
uiza.entity.delete('5f1c78bd-6900-4f59-a807-9c95aad3ed63').then((res) => console.log(res)).catch((err) => console.log(err));

// /** search */
uiza.entity.search('sample').then((res) => console.log(res)).catch((err) => console.log(err));

// /** publish */
uiza.entity.publish('1a6600c0-6ecd-4ca9-9ee1-3125e7c9d9f8').then((res) => console.log(res)).catch((err) => console.log(err));


// /** get status publish */
uiza.entity.get_status_publish('8c6de86e-f468-4226-b476-4f320bda225a').then((res) => console.log(res)).catch((err) => console.log(err));

// /** get aws upload key */
uiza.entity.get_aws_upload_key().then((res) => console.log(res)).catch((err) => console.log(err));
