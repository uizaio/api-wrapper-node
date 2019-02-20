const restClient = require('../services/RestClient');

const pathURL = '/api/public/v3/media/metadata';
const pathURLRelated = '/api/public/v3/media/entity/related/metadata';

const docResponse = require('../utils/docResponse').Category;

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.retrieve = (id) => restClient().get(docResponse.retrieve, `${pathURL}?id=${id}`);

exports.list = () => restClient().get(docResponse.list, pathURL);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.delete = (id) => restClient().delete(docResponse.delete, pathURL, {id});

exports.create_relation = (data) => restClient().post(docResponse.create, pathURLRelated, data);

exports.delete_relation = (data) => restClient().delete(docResponse.delete, pathURLRelated, data);
