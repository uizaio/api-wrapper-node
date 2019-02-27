## Live Streaming
These APIs used to create and manage live streaming event.
* When a Live is not start : it's named as `Event`.
* When have an Event , you can start it : it's named as `Feed`.

See details [here](https://docs.uiza.io/#live-streaming).

## Create a live event
These APIs use to create a live streaming and manage the live streaming input (output). A live stream can be set up and start later or start right after set up. Live Channel Minutes counts when the event starts.

See details [here](https://docs.uiza.io/#create-a-live-event).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** create */
uiza.live.create({
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
}).then((res) => {
    //Identifier of event has been created
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ id: '1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab' }
```

## Retrieve a live event
Retrieves the details of an existing event. You need only provide the unique identifier of event that was returned upon Live event creation.

See details [here](https://docs.uiza.io/#retrieve-a-live-event).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

uiza.live.retrieve('1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab')
  .then((res) => {
    //Identifier of live event has been retrieved
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ 
  id: '1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab',
  name: 'test event',
  description: 'This is for test event',
  mode: 'push',
  resourceMode: 'single',
  encode: 1,
  channelName: '19762307-e105-4628-8117-b5815a11d175',
  lastPresetId: null,
  lastFeedId: null,
  poster: '//image1.jpeg',
  thumbnail: '//image1.jpeg',
  linkPublishSocial: null,
  linkStream: '["https://playlist.m3u8"]',
  lastPullInfo: null,
  lastPushInfo: null,
  lastProcess: null,
  eventType: null,
  drm: '0',
  dvr: '1',
  createdAt: '2019-02-22T03:49:09.000Z',
  updatedAt: '2019-02-22T03:49:09.000Z'
}
```


## Update a live event
Update the specific Live event by edit values of parameters.

See details [here](https://docs.uiza.io/#update-a-live-event).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

uiza.live.update({
  'id': '1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab',
  'name': 'live test',
  'mode': 'pull',
  'encode': 0,
  'dvr': 1,
  'resourceMode': 'single'
}).then((res) => {
    //Identifier of event has been updated
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ id: '1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab' }
```

## Start a live feed
These API use to start a live event that has been create success. The Live channel minute start count whenever the event start success

See details [here](https://docs.uiza.io/#start-a-live-feed).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

uiza.live.start_feed('8bb4bb3e-0042-4be6-a5f0-25dc65145b14')
  .then((res) => {
    // Identifier of event
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ 
  message: 'Start feed success',
  entityId: '8bb4bb3e-0042-4be6-a5f0-25dc65145b14'
}
```

## Get view of live feed
This API use to get a live view status . This view only show when event has been started and being processing.

See details [here](https://docs.uiza.io/#get-view-of-live-feed).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

uiza.live.get_view('8bb4bb3e-0042-4be6-a5f0-25dc65145b14')
  .then((res) => {
    // Identifier of record (get from list record)
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{
  "stream_name": "peppa-pig-english-episodes",
  "watchnow": 1,
  "day": 1533271205999
}
```

## Stop a live feed
Stop live event

See details [here](https://docs.uiza.io/#stop-a-live-feed).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

uiza.live.stop_feed('8bb4bb3e-0042-4be6-a5f0-25dc65145b14')
  .then((res) => {
    // Identifier of event
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ 
  message: 'Stop feed success',
  entityId: '8bb4bb3e-0042-4be6-a5f0-25dc65145b14'
}
```

## List all recorded files
Retrieves list of recorded file after streamed (only available when your live event has turned on Record feature)

See details [here](https://docs.uiza.io/#list-all-recorded-files).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

uiza.live.list_recorded()
  .then((res) => {
    // Identifier of record
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
[
  {
    "id": "040df935-61c4-46f7-a41f-0a899ebaa2cc",
    "entityId": "ee122e85-553f-4621-bc77-1396191d5846",
    "channelName": "dcb8686f-d0f8-4a0f-8b92-22db339eb315",
    "feedId": "3e3b75df-e6fa-471c-b386-8f44b8a34b6c",
    "eventType": "pull",
    "startTime": "2018-12-13T16:28:29.000Z",
    "endTime": "2018-12-13T18:28:29.000Z",
    "length": "7200",
    "fileSize": "9276182",
    "extraInfo": null,
    "endpointConfig": "s3-uiza-dvr",
    "createdAt": "2018-12-13T19:28:43.000Z",
    "updatedAt": "2018-12-13T19:28:43.000Z",
    "entityName": "Christmas 2018 Holidays Special | Best Christmas Songs & Cartoons for Kids & Babies on Baby First TV"
  },
  {
    "id": "3fec45e9-932b-4efe-b97f-dc3053acaa05",
    "entityId": "47e804bc-d4e5-4442-8f1f-20341a156a70",
    "channelName": "e9034eac-4905-4f9a-8e79-c0bd67e49dd5",
    "feedId": "12830696-87e3-4209-a877-954f8f008964",
    "eventType": "pull",
    "startTime": "2018-12-13T14:14:14.000Z",
    "endTime": "2018-12-13T16:14:14.000Z",
    "length": "7200",
    "fileSize": "439858038",
    "extraInfo": null,
    "endpointConfig": "s3-uiza-dvr",
    "createdAt": "2018-12-13T17:30:42.000Z",
    "updatedAt": "2018-12-13T17:30:42.000Z",
    "entityName": "WATCH: SpaceX to Launch Falcon 9 Rocket #Spaceflight CRS16 @1:16pm EST"
  }
]
```

## Delete a record file
Delete a recorded file

See details [here](https://docs.uiza.io/#delete-a-record-file).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

uiza.live.delete('id....')
  .then((res) => {
    // Identifier of deleting a record
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ "id": "009596b1-f751-4102-86f7-7290a9f3f0cf" }
```

## Convert into VOD
Convert recorded file into VOD entity. After converted, your file can be stream via Uiza's CDN.

See details [here](https://docs.uiza.io/#convert-into-vod).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

uiza.live.convert_to_vod('8bb4bb3e-0042-4be6-a5f0-25dc65145b14')
  .then((res) => {
    // Identifier of record (get from list record)
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ "id": "8bb4bb3e-0042-4be6-a5f0-25dc65145b14" }
```
