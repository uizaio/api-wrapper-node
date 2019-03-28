const restClient = require('../services/RestClient');

const pathURL = '/api/public/v4/media/entity';

const pathURLForGettingAWS = '/api/public/v4/admin/app/config/aws';

const pathURLForSearching = '/api/public/v4/media/entity/search';

const docResponse = require('../utils/docResponse').Entity;

const generateRequestParams = require('../utils/generateRequestParams');

exports.retrieve = (data) => restClient().get(docResponse.retrieve, `${pathURL}${generateRequestParams(data)}`);

exports.list = () => restClient().get(docResponse.list, `${pathURL}${generateRequestParams()}`);

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.publish = (id) => restClient().post(docResponse.publish, `${pathURL}/publish`, id);

exports.get_status_publish = (data) => restClient().get(docResponse.get_status_publish, `${pathURL}/publish/status${generateRequestParams(data)}`);

exports.get_aws_upload_key = () => restClient().get(docResponse.get_aws_upload_key, `${pathURLForGettingAWS}${generateRequestParams()}`);

exports.delete = (id) => restClient().delete(docResponse.delete, pathURL, id);

exports.search = (data) => restClient().get(docResponse.search, `${pathURLForSearching}${generateRequestParams(data)}`);
