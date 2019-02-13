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



### List all entities

```node
uiza.entity.list().then((res) => {
  //Get list of entities including all detail.
}).catch((err) => {
  //Error
});
```

### Update an entity

```node
uiza.entity.update({
  'id': '16de511f-5.......',
  'name': '--Title edited--',
}).then((res) => {
  // Identifier of entity has been deleted
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



### Publish entity to CDN



### Get status publish



### Get AWS upload key



## Development

Run all tests:

```bash
$ npm install
$ npm test
```

