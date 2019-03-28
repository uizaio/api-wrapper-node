const restClient = require('../services/RestClient');

const pathURL = '/api/public/v4/media/storage';

const docResponse = require('../utils/docResponse').Storage;

const generateRequestParams = require('../utils/generateRequestParams');

exports.add = (data) => restClient().post(docResponse.add, pathURL, data);

exports.retrieve = (data) => restClient().get(docResponse.retrieve, `${pathURL}${generateRequestParams(data)}`);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.remove = (data) => restClient().delete(docResponse.remove, pathURL, data);
