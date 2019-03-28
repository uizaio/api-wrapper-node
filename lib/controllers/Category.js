const restClient = require('../services/RestClient');

const pathURL = '/api/public/v4/media/metadata';

const pathURLRelated = '/api/public/v4/media/entity/related/metadata';

const docResponse = require('../utils/docResponse').Category;

const generateRequestParams = require('../utils/generateRequestParams');

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.retrieve = (data) => restClient().get(docResponse.retrieve, `${pathURL}${generateRequestParams(data)}`);

exports.list = () => restClient().get(docResponse.retrieve, `${pathURL}${generateRequestParams()}`);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.delete = (data) => restClient().delete(docResponse.delete, pathURL, data);

exports.create_relation = (data) => restClient().post(docResponse.create_relation, pathURLRelated, data);

exports.delete_relation = (data) => restClient().delete(docResponse.delete_relation, pathURLRelated, data);
