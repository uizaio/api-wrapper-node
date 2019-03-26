# Uiza Node.js Library

Welcome to your new package! 

The Uiza Node library provides convenient access to the Uiza API from applications written in server-side JavaScript.

## Introduction
This is the public API documents for Uiza version 4.0.

The Uiza API is organized around RESTful standard.
Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors.
JSON is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

## Authentication
In order, to use the Uiza, you should follow these steps:

* **Step 1:** Having an active Uiza account. (If you don't have, please get [here](https://id.uiza.io/))
* **Step 2:** Once you have an Uiza account, you can get a Token to call the APIs.

This Token will have right & permission related with your account.


## Installation
Add this line to your package.json:

```node
"dependencies": {
  "uiza": "1.2.0",
}
```

And then execute:

```node
$ npm install
```

Or install it yourself as:

```node
$ npm install uiza --save
```

### Requirements

* Node >=4

## Usage
The library needs to be configured with your account's `authorization` (API key) and `appId` (App key).

See details [here](https://docs.uiza.io/#authentication).

## Node

```node
const uiza = require('uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

```

## Entity
These below APIs used to take action with your media files (we called Entity).

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master/doc/ENTITY.md).

```node
const uiza = require('uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

const params = {
  'name': 'Sample Video',
  'url': 'https://example.com/video.mp4',
  'inputType': 'http',
  'description': 'tes'
};

uiza.entity.create(params).then((res) => {
  //Identifier of entity has been created
}).catch((err) => {
  //Error
});
```

## Category
Category has been splits into 3 types: `folder`, `playlist` and `tag`. These will make the management of entity more easier.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master/doc/CATEGORY.md).

```node
const uiza = require('uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

const params = {
  'name': 'Folder sample 2',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
};

uiza.category.create(params).then((res) => {
  //Identifier of category has been created
}).catch((err) => {
  //Error
});
```

## Storage
You can add your storage (`FTP`, `AWS S3`) with UIZA.
After synced, you can select your content easier from your storage to [create entity](https://docs.uiza.io/#create-entity).

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master/doc/STORAGE.md).

```node
const uiza = require('uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

const params = {
  'name': 'axon',
  'description': 'axon of Uiza, use for transcode',
  'storageType': 'ftp',
  'host': 'axon-example.uiza.io',
  'username': 'uiza',
  'password': '=59x@LPsd+w7qW',
  'port': 21,
};

uiza.storage.add(params).then((res) => {
  //Identifier of storage has been add
}).catch((err) => {
  //Error
});
```

## Live Streaming
These APIs used to create and manage live streaming event.
* When a Live is not start : it's named as `Event`.
* When have an `Event` , you can start it : it's named as `Feed`.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master/doc/LIVE_STREAMING.md).


```node
const uiza = require('uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

const params = {
  'name': 'test event',
  'mode': 'push',
  'encode': 1,
  'dvr': 1,
  'description': 'This is for test event',
  'poster': '//image1.jpeg',
  'thumbnail': '//image1.jpeg',
  'linkStream': [
    'https://playlist.m3u8'
  ],
  'resourceMode': 'single'
};


uiza.live.create(params).then((res) => {
    //Identifier of event has been created
  }).catch((err) => {
    //Error
  });
```

## Callback
Callback used to retrieve an information for Uiza to your server, so you can have a trigger notice about an entity is upload completed .

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master/doc/CALLBACK.md).

```node
const uiza = require('uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

const params = {
  'url': 'https://callback-url.uiza.co',
  'method': 'POST'
};

uiza.callback.create(params).then((res) => {
  //Identifier of callback has been created
}).catch((err) => {
  //Error
});
```

## User Management
You can manage user with APIs user. Uiza have 2 levels of user: Admin - This account will have the highest priority, can have permission to create & manage users. User - This account level is under Admin level. It only manages APIs that relates to this account.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master/doc/USER_MANAGEMENT.md).

```node
const uiza = require('uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

const params = {
  'status': 1,
  'username': 'user_test_1',
  'email': 'user_test@uiza.io',
  'fullname': 'User Test',
  'avatar': 'https://exemple.com/avatar.jpeg',
  'dob': '05/15/2018',
  'gender': 0,
  'password': 'FMpsr<4[dGPu?B#u',
  'isAdmin': 1
};

uiza.user.create(params).then((res) => {
  // Identifier of user has been created
}).catch((err) => {
  // Error
});
```

## Embed Metadata
Embed metadata is information that can be embed into video/audio file. You can embed into file by adding a json compose these tag.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master/doc/EMBED_METADATA.md).

## Errors Code
Uiza uses conventional HTTP response codes to indicate the success or failure of an API request.
In general: Codes in the `2xx` range indicate success.
Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.).
Codes in the `5xx` range indicate an error with Uiza's servers.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master/doc/ERRORS_CODE.md).

## Development

Run all tests:

```bash
$ npm install
$ npm test
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/uizaio/api-wrapper-node. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Uiza project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/uizaio/api-wrapper-node/blob/master/CODE_OF_CONDUCT.md).
