## Storage
You can add your storage (FTP, AWS S3) with UIZA.
After synced, you can select your content easier from your storage to create entity.

See details [here](https://docs.uiza.io/#storage).

## Add a storage
You can sync your storage (FTP, AWS S3) with UIZA.\
After synced, you can select your content easier from your storage to create entity.

See details [here](https://docs.uiza.io/#add-a-storage).

```node
uiza.storage.add({
  'name': 'axon',
  'description': 'axon of Uiza, use for transcode',
  'storageType': 'ftp',
  'host': 'axon-example.uiza.io',
  'username': 'uiza',
  'password': '=59x@LPsd+w7qW',
  'port': 21,
}).then((res) => {
  //Identifier of entity has been created
}).catch((err) => {
  //Error
});
```

Example Response

```node
{ id: '416b342a-4165-4c94-9eed-253aa5312f72' }
```
## Retrieve a storage
Get information of your added storage (FTP or AWS S3).

See details [here](https://docs.uiza.io/#retrieve-a-storage).

```node
uiza.storage.retrieve('03e6a059-c6d2-440c-a653-1e309918c792').then((res) => {
  //Identifier of entity has been created
}).catch((err) => {
  //Error
});
```

Example Response

```node
{ 
  id: '03e6a059-c6d2-440c-a653-1e309918c792',
  name: 'cgv Uiza',
  description: 'cgv of Uiza, use for transcode',
  storageType: 's3',
  usageType: 'input',
  bucket: null,
  prefix: null,
  host: 'cgv-example.uiza.io',
  awsAccessKey: null,
  awsSecretKey: null,
  username: 'uiza',
  password: '=5;9x@LPsd+w7qW',
  region: null,
  port: 80,
  createdAt: '2019-02-19T04:27:32.000Z',
  updatedAt: '2019-02-19T04:33:14.000Z' 
}
```
## Update storage
Update storage's information.

See details [here](https://docs.uiza.io/#update-storage).



## Remove storage
Remove storage that added to Uiza.

See details [here](https://docs.uiza.io/#remove-storage).

