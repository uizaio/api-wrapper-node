const restClient = require('../services/RestClient');

const pathURL = '/api/public/v3/media/entity';

const docResponse = require('../utils/docResponse').Entity;

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.retrieve = (id) => restClient().get(docResponse.retrieve, `${pathURL}?id=${id}`);

exports.list = () => restClient().get(docResponse.list, pathURL);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.delete = (id) => restClient().delete(docResponse.delete, pathURL, {id});

exports.search = (keyword) => restClient().get(docResponse.search, `${pathURL}/search?keyword=${keyword}`);

exports.publish = (id) => restClient().post(docResponse.publish, `${pathURL}/publish`, {id});

exports.get_status_publish = (id) => restClient().get(docResponse.get_status_publish, `${pathURL}/publish/status?id=${id}`);

exports.get_aws_upload_key = () => restClient().get(docResponse.get_aws_upload_key, '/api/public/v3/admin/app/config/aws');
