const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');

/** create */
uiza.entity.create({
  'name': 'Sample Video',
  'url': 'https://example.com/video.mp4',
  'inputType': 'http',
  'description': 'tes'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** delete */
uiza.entity.delete({'id': '5f1c78bd-6900-4f59-a807-9c95aad3ed63'}).then((res) => console.log(res)).catch((err) => console.log(err));

/** update */
uiza.entity.update({
  'id': '16de511f-5493-400a-9250-2d3b38b1d0be',
  'name': '--Title edited--',
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** get */
uiza.entity.list().then((res) => console.log(res)).catch((err) => console.log(err));
