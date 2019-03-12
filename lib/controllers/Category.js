const restClient = require('../services/RestClient');

const pathURL = '/api/public/v4/media/metadata';

const docResponse = require('../utils/docResponse').Category;

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);
