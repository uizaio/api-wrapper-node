# Uiza Node.js Library

Welcome to your new package! 

The Uiza Node library provides convenient access to the Uiza API from applications written in server-side JavaScript.

## Introduction
This is the public API documents for Uiza version 3.0.

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
  "uiza": "1.1.1",
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
The library needs to be configured with your account's `workspace_api_domain` and `authorization` (API key).

See details [here](https://docs.uiza.io/#authentication).

## Node

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');
```

## Entity
These below APIs used to take action with your media files (we called Entity).

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/ENTITY.md).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'name': 'Sample Video',
  'url': 'https://example.com/video.mp4',
  'inputType': 'http',
  'description': 'tes'
}

uiza.entity.create(params)
.then((res) => {
  //Identifier of entity has been created
}).catch((err) => {
  //Error
});

//Example Response

{ id: '416b342a-4165-4c94-9eed-253aa5312f72' }
```

## Category
Category has been splits into 3 types: `folder`, `playlist` and `tag`. These will make the management of entity more easier.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/CATEGORY.md).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'name': 'Folder sample 2',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
}

uiza.category.create(params)
.then((res) => {
  //Identifier of category has been created
}).catch((err) => {
  //Error
});

//Example Response

{ id: 'b8f2a6ec-d45f-4cc0-a32d-35ad0ad9f1b6' }
```

## Storage
You can add your storage (`FTP`, `AWS S3`) with UIZA.
After synced, you can select your content easier from your storage to [create entity](https://docs.uiza.io/#create-entity).

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/STORAGE.md).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'name': 'axon',
  'description': 'axon of Uiza, use for transcode',
  'storageType': 'ftp',
  'host': 'axon-example.uiza.io',
  'username': 'uiza',
  'password': '=59x@LPsd+w7qW',
  'port': 21,
}

uiza.storage.add(params).then((res) => {
  //Identifier of storage has been add
}).catch((err) => {
  //Error
});

//Example Response

{ id: '416b342a-4165-4c94-9eed-253aa5312f72' }
```

## Live Streaming
These APIs used to create and manage live streaming event.
* When a Live is not start : it's named as `Event`.
* When have an `Event` , you can start it : it's named as `Feed`.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/LIVE_STREAMING.md).


```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

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
}

uiza.live.create(params)
.then((res) => {
  //Identifier of event has been created
}).catch((err) => {
  //Error
});

//Example Response

{ id: '1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab' }
```

## Callback
Callback used to retrieve an information for Uiza to your server, so you can have a trigger notice about an entity is upload completed .

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/CALLBACK.md).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'url': 'https://callback-url.uiza.co',
  'method': 'POST'
}

uiza.callback.create(params)
.then((res) => {
  //Identifier of callback has been created
}).catch((err) => {
  //Error
});

//Example Response

{ "id": "8b83886e-9cc3-4eab-9258-ebb16c0c73de" }
```

## User Management
You can manage user with APIs user. Uiza have 2 levels of user: Admin - This account will have the highest priority, can have permission to create & manage users. User - This account level is under Admin level. It only manages APIs that relates to this account.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/USER_MANAGEMENT.md).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

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
}

uiza.user.create(params)
.then((res) => {
  // Identifier of user has been created
}).catch((err) => {
  // Error
});

//Example Response

{ 
  status: 1,
  username: 'user_test_1',
  email: 'user_test@uiza.io',
  fullname: 'User Test',
  avatar: 'https://exemple.com/avatar.jpeg',
  dob: '05/15/2018',
  gender: 0,
  password: 'sha1$3162c519$1$3dd7e93d1be2ee552ccff6cede4543d2a609154b',
  isAdmin: 1,
  appId: 'a2aaa7b2aea746ec89e67ad2f8f9ebbf',
  adminUserId: '16742354-03f2-43fc-b7de-c46071ca8767',
  isMaster: 0,
  id: 'c1a4bdbe-6abe-46dd-adb1-1bbd16813ee1'
}
```

## Analytic
Monitor the four key dimensions of video QoS: playback failures, startup time, rebuffering, and video quality.
These 15 metrics help you track playback performance, so your team can know exactly what’s going on.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/ANALYTIC.md).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'start_date': '2019-02-28 00:00',
  'end_date': '2019-03-01 23:00',
  'metric': 'rebuffer_count'
}

uiza.analytic.get_total_line(params)
.then((res) => {
  //Identifier of get_total_line
}).catch((err) => {
  //Error
});

//Example Response

[
  {
      "date_time": 1542978000000,
      "rebuffer_count": 1.6666666666666667
  },
  {
      "date_time": 1543204800000,
      "rebuffer_count": 0.5
  },
  {
      "date_time": 1543215600000,
      "rebuffer_count": 5
  }
]
```

## Embed Metadata
Embed metadata is information that can be embed into video/audio file. You can embed into file by adding a json compose these tag.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/EMBED_METADATA.md).

## Errors Code
Uiza uses conventional HTTP response codes to indicate the success or failure of an API request.
In general: Codes in the `2xx` range indicate success.
Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.).
Codes in the `5xx` range indicate an error with Uiza's servers.

See details [here](https://github.com/uizaio/api-wrapper-node/blob/master_v3/doc/ERRORS_CODE.md).

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
