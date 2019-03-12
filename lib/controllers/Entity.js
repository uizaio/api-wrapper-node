const restClient = require('../services/RestClient');

const pathURL = '/api/public/v4/media/entity';

const docResponse = require('../utils/docResponse').Entity;

const generateRequestParams = require('../utils/generateRequestParams');

exports.get = (data) => restClient().get(docResponse.get, `${pathURL}${generateRequestParams(data)}`);
