const uiza = require('../lib/uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

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
uiza.storage.retrieve('03e6a059-c6d2-440c-a653-1e309918c792').then((res) => console.log(res)).catch((err) => console.log(err));

/* update storage*/
uiza.storage.update({
  'id': '03e6a059-c6d2-440c-a653-1e309918c792',
  'name': 'FTP Uiza',
  'description': 'FTP of Uiza, use for transcode',
  'storageType': 'ftp',
  'host': 'ftp-example.uiza.io',
  'username': 'uiza',
  'password': '=59x@LPsd+w7qW',
  'port': 21
}).then((res) => console.log(res)).catch((err) => console.log(err));

// /* remove storage*/
uiza.storage.remove('03e6a059-c6d2-440c-a653-1e309918c792').then((res) => console.log(res)).catch((err) => console.log(err));
