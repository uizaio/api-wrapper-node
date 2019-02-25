const restClient = require('../services/RestClient');

const pathURL = '/api/public/v3/media/storage';

const docResponse = require('../utils/docResponse').Storage;

exports.add = (data) => restClient().post(docResponse.add, pathURL, data);

exports.retrieve = (id) => restClient().get(docResponse.retrieve, `${pathURL}?id=${id}`);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.remove = (id) => restClient().delete(docResponse.remove, pathURL, {id});
