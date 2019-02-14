const restClient = require('../services/RestClient');

const pathURL = '/api/public/v3/media/entity';

exports.create = (data) => restClient().post(pathURL, data);

exports.retrieve = (data) => restClient().get(`${pathURL}?id=${data.id}`);

exports.list = () => restClient().get(pathURL);

exports.update = (data) => restClient().update(pathURL, data);

exports.delete = (data) => restClient().delete(pathURL, data);

exports.search = (data) => restClient().get(`${pathURL}/search?keyword=${data.keyword}`);

exports.publish = (data) => restClient().post(`${pathURL}/publish`, data);

exports.get_status_publish = (data) => restClient().get(`${pathURL}/publish/status?id=${data.id}`);

exports.get_aws_upload_key = () => restClient().get('/api/public/v3/admin/app/config/aws');
