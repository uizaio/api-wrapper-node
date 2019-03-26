const uiza = require('../lib/uiza');
uiza.authorization('your-authorization-key');
uiza.app_id('your-app-id');

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
    'https://5b44cf20b0388.streamlock.net:8443/live/ngrp:live_all/playlist.m3u8'
  ],
  'resourceMode': 'single'
}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** retrieve */
uiza.live.retrieve({id: '7328b4aa-75c0-4c91-bc2a-0983bd5f79a9'}).then((res) => console.log(res)).catch((err) => console.log(err));

// // /** update */
uiza.live.update({
  'id': '7328b4aa-75c0-4c91-bc2a-0983bd5f79a9',
  'name': 'live test',
  'mode': 'pull',
  'encode': 0,
  'dvr': 1,
  'resourceMode': 'single'
}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** Start a live feed */
uiza.live.start_feed({id: '7328b4aa-75c0-4c91-bc2a-0983bd5f79a9'}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** Get view of live feed */
uiza.live.get_view({id: '7328b4aa-75c0-4c91-bc2a-0983bd5f79a9'}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** Stop a live feed */
uiza.live.stop_feed({id: '7328b4aa-75c0-4c91-bc2a-0983bd5f79a9'}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** List all recorded files */
uiza.live.list_recorded().then((res) => console.log(res)).catch((err) => console.log(err));

// /** Delete a record file */
uiza.live.delete({id: '7328b4aa-75c0-4c91-bc2a-0983bd5f79a9'}).then((res) => console.log(res)).catch((err) => console.log(err));

// /** Convert into VOD */
uiza.live.convert_to_vod({id: '7328b4aa-75c0-4c91-bc2a-0983bd5f79a9'}).then((res) => console.log(res)).catch((err) => console.log(err));
