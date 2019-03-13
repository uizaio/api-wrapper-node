const restClient = require('../services/RestClient');

const pathURL = '/api/public/v4/live/entity';
const pathURLFeed = '/api/public/v4/live/entity/feed';
const pathURLViewLive = '/api/public/v4/live/entity/tracking/current-view';
const pathURLRecord = '/api/public/v4/live/entity/dvr';
const pathURLConvert = '/api/public/v4/live/entity/dvr/convert-to-vod';

const generateRequestParams = require('../utils/generateRequestParams');

const docResponse = require('../utils/docResponse').Live;

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.retrieve = (data) => restClient().get(docResponse.retrieve, `${pathURL}${generateRequestParams(data)}`);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.start_feed = (data) => restClient().post(docResponse.start_feed, pathURLFeed, data);

exports.get_view = (data) => restClient().get(docResponse.get_view, `${pathURLViewLive}${generateRequestParams(data)}`);

exports.stop_feed = (data) => restClient().update(docResponse.stop_feed, pathURLFeed, data);

exports.list_recorded = () => restClient().get(docResponse.list_recorded, `${pathURLRecord}${generateRequestParams()}`);

exports.delete = (data) => restClient().delete(docResponse.delete, pathURLRecord, data);

exports.convert_to_vod = (data) => restClient().post(docResponse.convert_to_vod, pathURLConvert, data);
