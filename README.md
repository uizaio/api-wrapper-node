# Uiza Node.js Library

Welcome to your new package! 

The Uiza Node library provides convenient access to the Uiza API from applications written in server-side JavaScript.

## Documentation

Access to the [Uiza](https://uiza.io/) [API](https://id.uiza.io/).

## Installation

Install the package with:

    npm install uiza --save

## Usage
The package needs to be configured with your account's secret key which is available in your [Uiza Dashboard](https://id.uiza.io/).
You should follow these steps:
* Having an active Uiza account. (If you don't have, please get here)
* Once you have an Uiza account, you can get a Token to call the APIs.
Require it with the key's value:

      const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization-key');


### Requirements

* Node >=4

## Entity

These below APIs used to take action with your media files (we called Entity) See details [here](https://docs.uiza.io/#video).

### Create entity

Create entity using full URL. Direct HTTP, FTP or AWS S3 link are acceptable.

```node
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

### Retrieve an entity

Get detail of entity including all information of entity

```node
uiza.entity.retrieve({
  'id': 'd1781e62-2d2c-4e3c-b8de-e808e50ac845'
}).then((res) => {
  //Identifier of entity
}).catch((err) => {
  //Error
});
```

### List all entities

Get list of entities including all detail.

```node
uiza.entity.list().then((res) => {
  //Get list of entities including all detail.
}).catch((err) => {
  //Error
});
```

### Update an entity

Update entity's information.

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

### Delete an entity

```node
uiza.entity.delete({'id': '5f1c78bd-69......'}).then((res) => {
  // Identifier of entity has been deleted
}).catch((err) => {
  //Error
});
```

### Search entity

Search entity base on keyword entered

```node
uiza.entity.search({'keyword': 'sample'}).then((res) => {
  // Response search entity base on keyword entered
}).catch((err) => {
  //Error
});
```

### Publish entity to CDN

Publish entity to CDN, use for streaming

```node
uiza.entity.publish({
  'id': '1a6600c0-6ecd-4ca9-9ee1-3125e7c9d9f8',
}).then((res) => {
  // Identifier of task publish
}).catch((err) => {
  //Error
});
```

### Get status publish

Publish entity to CDN, use for streaming

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

### Get AWS upload key

This API will be return the bucket temporary upload storage & key for upload, so that you can push your file to Uiza’s storage and get the link for URL upload & create entity

```node
uiza.entity.get_aws_upload_key()
.then((res) => {
  // The response body will return you the paramaters that used for input to aws sdk , then upload your files to Uiza’s storage
}).catch((err) => {
  //Error
});
```


## Handling errors

```node
// Note: Node.js API does not throw exceptions, and instead prefers the
// asynchronous style of error handling described below.
//
// An error from the Uiza API or an otheriwse asynchronous error

// Or in the form of a rejected promise.
// E.g. uiza.entity.retrieve('d1781e6....').then(
//        function(result) {},
//        function(err) {}
//      );

switch (err.type) {
  case 'BadRequestError':
    // A declined card error
    err.message; // => e.g. "The request was unacceptable, often due to missing a required parameter."
    err.;  // => e.g. "https://docs.uiza.io/#retrieve-an-entity"
    break;
  case 'UnauthorizedError':
    // No valid API key provided.
    break;
  case 'NotFoundError':
    // The requested resource doesn't exist.
    break;
  case 'UnprocessableError':
    // The syntax of the request is correct (often cause of wrong parameter)
    break;
  case 'InternalServerError':
    // We had a problem with our server. Try again later.
    break;
  case 'ServiceUnavailableError':
    // The server is overloaded or down for maintenance.
    break;
  case 'ClientError':
    // The error seems to have been caused by the client
    break;
  case 'ServerError':
    // The server is aware that it has encountered an error
    break;
  default:
    // Handle any other types of unexpected errors
    break;
}
```

## Development

Run all tests:

```bash
$ npm install
$ npm test
```
