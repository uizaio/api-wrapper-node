const restClient = require('../services/RestClient');

const pathURL = '/api/public/v3/media/entity/callback';

const docResponse = require('../utils/docResponse').Callback;

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.retrieve = (id) => restClient().get(docResponse.retrieve, `${pathURL}?id=${id}`);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.delete = (id) => restClient().delete(docResponse.delete, pathURL, {id});
