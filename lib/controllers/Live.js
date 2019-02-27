const restClient = require('../services/RestClient');

const pathURL = '/api/public/v3/live/entity';
const pathURLFeed = '/api/public/v3/live/entity/feed';
const pathURLViewLive = '/api/public/v3/live/entity/tracking/current-view';
const pathURLRecord = '/api/public/v3/live/entity/dvr';
const pathURLConvert = '/api/public/v3/live/entity/dvr/convert-to-vod';

const docResponse = require('../utils/docResponse').Live;

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.retrieve = (id) => restClient().get(docResponse.retrieve, `${pathURL}?id=${id}`);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.start_feed = (id) => restClient().post(docResponse.start_feed, pathURLFeed, {id});

exports.get_view = (id) => restClient().get(docResponse.get_view, `${pathURLViewLive}?id=${id}`);

exports.stop_feed = (id) => restClient().update(docResponse.stop_feed, pathURLFeed, {id});

exports.list_recorded = () => restClient().get(docResponse.list_recorded, pathURLRecord);

exports.delete = (id) => restClient().delete(docResponse.delete, pathURLRecord, {id});

exports.convert_to_vod = (id) => restClient().post(docResponse.convert_to_vod, pathURLConvert, {id});
