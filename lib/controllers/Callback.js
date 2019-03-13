const restClient = require('../services/RestClient');

const pathURL = '/api/public/v4/media/entity/callback';

const docResponse = require('../utils/docResponse').Callback;
const generateRequestParams = require('../utils/generateRequestParams');

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.retrieve = () => restClient().get(docResponse.retrieve, `${pathURL}${generateRequestParams()}`);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.delete = (id) => restClient().delete(docResponse.delete, pathURL, id);
