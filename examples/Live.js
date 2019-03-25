const uiza = require('../lib/uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

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

/** retrieve */
uiza.live.retrieve('1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab').then((res) => console.log(res)).catch((err) => console.log(err));

// /** update */
uiza.live.update({
  'id': '1b2c6899-2bca-4d60-ae78-01d1c2f5a2ab',
  'name': 'live test',
  'mode': 'pull',
  'encode': 0,
  'dvr': 1,
  'resourceMode': 'single'
}).then((res) => console.log(res)).catch((err) => console.log(err));

/** Start a live feed */
uiza.live.start_feed('8bb4bb3e-0042-4be6-a5f0-25dc65145b14').then((res) => console.log(res)).catch((err) => console.log(err));

/** Get view of live feed */
uiza.live.get_view('8bb4bb3e-0042-4be6-a5f0-25dc65145b14').then((res) => console.log(res)).catch((err) => console.log(err));

/** Stop a live feed */
uiza.live.stop_feed('8bb4bb3e-0042-4be6-a5f0-25dc65145b14').then((res) => console.log(res)).catch((err) => console.log(err));

/** List all recorded files */
uiza.live.list_recorded().then((res) => console.log(res)).catch((err) => console.log(err));

/** Delete a record file */
uiza.live.delete('c0d3e5f2-9ae7-4e46-94a2-29612d562db0').then((res) => console.log(res)).catch((err) => console.log(err));

/** Convert into VOD */
uiza.live.convert_to_vod('8bb4bb3e-0042-4be6-a5f0-25dc65145b14').then((res) => console.log(res)).catch((err) => console.log(err));
