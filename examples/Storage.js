const uiza = require('../lib/uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

/* add storage*/
uiza.storage.add({
  'name': 'axon',
  'description': 'axon of Uiza, use for transcode',
  'storageType': 'ftp',
  'host': 'axon-example.uiza.io',
  'username': 'uiza',
  'password': '=59x@LPsd+w7qW',
  'port': 21,
}).then((res) => console.log(res)).catch((err) => console.log(err));

/* retrieve storage*/
uiza.storage.retrieve({id: '63d2e97e-8089-4f3b-9449-c678eb841d14'}).then((res) => console.log(res)).catch((err) => console.log(err));

/* update storage*/
uiza.storage.update({
  'id': '63d2e97e-8089-4f3b-9449-c678eb841d14',
  'name': 'FTP Uiza 1',
  'description': 'FTP of Uiza, use for transcode',
  'storageType': 'ftp',
  'host': 'ftp-example.uiza.io',
  'username': 'uiza',
  'password': '=59x@LPsd+w7qW',
  'port': 21
}).then((res) => console.log(res)).catch((err) => console.log(err));

/* remove storage*/
uiza.storage.remove({id: '63d2e97e-8089-4f3b-9449-c678eb841d14'}).then((res) => console.log(res)).catch((err) => console.log(err));
