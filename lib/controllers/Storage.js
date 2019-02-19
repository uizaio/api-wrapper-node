const restClient = require('../services/RestClient');

const pathURL = '/api/public/v3/media/storage';

const docResponse = require('../utils/docResponse').Storage;

exports.add = (data) => restClient().post(docResponse.add, pathURL, data);

exports.retrieve = (id) => restClient().get(docResponse.retrieve, `${pathURL}?id=${id}`);
