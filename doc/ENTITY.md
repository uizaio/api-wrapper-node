## Entity
These below APIs used to take action with your media files (we called Entity).

See details [here](https://docs.uiza.io/#video).

## Create entity
Create entity using full URL. Direct HTTP, FTP or AWS S3 link are acceptable.

See details [here](https://docs.uiza.io/#create-entity).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

uiza.entity.create({
  'name': 'Sample Video',
  'url': 'https://example.com/video.mp4',
  'inputType': 'http',
  'description': 'tes'
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

## Retrieve entity
Get detail of entity including all information of entity.

See details [here](https://docs.uiza.io/#retrieve-an-entity).

```node
uiza.entity.retrieve({
  'id': 'd1781e62-2d2c-4e3c-b8de-e808e50ac845'
}).then((res) => {
  //Identifier of entity
}).catch((err) => {
  //Error
});
```

Example Response

```node
{ id: 'd1781e62-2d2c-4e3c-b8de-e808e50ac845',
  name: 'Sample Video',
  description: 'Test Update Entity',
  shortDescription: null,
  view: 0,
  poster: null,
  thumbnail: null,
  type: null,
  duration: null,
  embedMetadata: null,
  publishToCdn: 'not-ready',
  extendMetadata: null,
  createdAt: '2019-02-13T11:49:16.000Z',
  updatedAt: '2019-02-14T01:29:34.000Z' }
```

## List all entities
Get list of entities including all detail.

See details [here](https://docs.uiza.io/#list-all-entities).


```node
uiza.entity.list().then((res) => {
  //Get list of entities including all detail.
}).catch((err) => {
  //Error
});
```

Example Response
```node
[ 
  { id: '416b342a-4165-4c94-9eed-253aa5312f72',
    name: 'Sample Video',
    description: 'tes',
    shortDescription: null,
    view: 0,
    poster: null,
    thumbnail: null,
    type: null,
    duration: null,
    embedMetadata: null,
    publishToCdn: 'not-ready',
    extendMetadata: null,
    createdAt: '2019-02-19T05:44:51.000Z',
    updatedAt: '2019-02-19T05:45:05.000Z' },
  { id: 'f80c8290-f9c9-4c1a-a124-5e57b02968ce',
    name: 'grgr',
    description: null,
    shortDescription: null,
    view: 0,
    poster: null,
    thumbnail: null,
    type: null,
    duration: null,
    embedMetadata: null,
    publishToCdn: 'not-ready',
    extendMetadata: null,
    createdAt: '2019-02-19T02:13:35.000Z',
    updatedAt: '2019-02-19T02:13:53.000Z'
  }
]
```

## Update entity
Update entity's information.

See details [here](https://docs.uiza.io/#update-an-entity).


```node
uiza.entity.update({
  'id': '16de511f-5.......',
  'name': '--Title edited--',
}).then((res) => {
  // Identifier of entity has been updated
}).catch((err) => {
  //Error
});
```

Example Response

```node
{ id: '416b342a-4165-4c94-9eed-253aa5312f72' }
```

## Delete entity
Delete entity.

See details [here](https://docs.uiza.io/#delete-an-entity).

```node
uiza.entity.delete({'id': '5f1c78bd-69......'}).then((res) => {
  // Identifier of entity has been deleted
}).catch((err) => {
  //Error
});
```

Example Response

```node
{
  "id": "64b15996-2261-4f41-a3c4-72b652323f67"
}
```

## Search entity
Search entity base on keyword entered.

See details [here](https://docs.uiza.io/#search-entity).

```node
uiza.entity.search({'keyword': 'sample'}).then((res) => {
  // Response search entity base on keyword entered
}).catch((err) => {
  //Error
});
```

Example Response
```node
[
  { id: '1949b2b0-8f38-4e8e-87d7-a2a37517f538',
    name: 'Sample update',
    description: 'Description update',
    shortDescription: 'ShortDescription update',
    view: 0,
    poster: '/example.com/updatePoster',
    thumbnail: '/example.com/updateThumbnail',
    type: null,
    duration: null,
    embedMetadata: null,
    extendMetadata: null,
    publishToCdn: 'not-ready',
    readyToPublish: 'off',
    createdAt: '2019-02-14T08:02:43.000Z',
    updatedAt: '2019-02-14T08:03:06.000Z',
    keySearch: 'sample update' },
  { id: 'fa281875-aad7-4d8f-942b-2dfd2616ef1b',
    name: 'Sample Video',
    description: null,
    shortDescription: null,
    view: 0,
    poster: null,
    thumbnail: null,
    type: null,
    duration: null,
    embedMetadata: null,
    extendMetadata: null,
    publishToCdn: 'not-ready',
    readyToPublish: 'off',
    createdAt: '2019-02-14T08:26:23.000Z',
    updatedAt: '2019-02-14T08:26:23.000Z',
    keySearch: 'sample video'
  }
]
```

## Publish entity to CDN
Publish entity to CDN, use for streaming.

See details [here](https://docs.uiza.io/#publish-entity-to-cdn).

```node
uiza.entity.publish({
  'id': '1a6600c0-6ecd-4ca9-9ee1-3125e7c9d9f8',
}).then((res) => {
  // Identifier of task publish
}).catch((err) => {
  //Error
});
```

Example Response

```node
{ 
  message: 'Your entity started publish, check process status with this entity ID',
  entityId: '1a6600c0-6ecd-4ca9-9ee1-3125e7c9d9f8'
}
```

## Get status publish
Publish entity to CDN, use for streaming.

See details [here](https://docs.uiza.io/#get-status-publish).


```node
uiza.entity.get_status_publish({
  'id': '8c6de86e-f468-4226-b476-4f320bda225a',
}).then((res) => {
  //Progress of task publish, will be success when reach 100
  // Status of task publish (processing, success, error)
}).catch((err) => {
  //Error
});
```

Example Response

```node
{ progress: 0, status: 'processing' }
```

## Get AWS upload key
This API will be return the bucket temporary upload storage & key for upload, so that you can push your file to Uiza’s storage and get the link for URL upload & create entity.

See details [here](https://docs.uiza.io/#get-aws-upload-key).


```node
uiza.entity.get_aws_upload_key()
.then((res) => {
  // The response body will return you the paramaters that used for input to aws sdk , then upload your files to Uiza’s storage
}).catch((err) => {
  //Error
});
```

Example Response
```node
{ 
  region_name: 'ap-southeast-1',
  bucket_name: 'uiza****-storage-ap-southeast-1-01/upload-temp/****ff4ad74a5195f4c/',
  temp_access_id: 'ASIAV*******GPHO2DTZ',
  temp_session_token: 'FQo///wEaDM3rrospITbBQ==',
  temp_expire_at: 1550599140,
  temp_access_secret: 'dp****cx2mE2lZxsSq7kV++vWSL6RNatAhbqc'
}
```
