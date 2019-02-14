const restClient = require('../services/RestClient');

exports.create = (data) => restClient().post('/api/public/v3/media/entity', data);

exports.retrieve = (data) => restClient().get(`/api/public/v3/media/entity?id=${data.id}`);

exports.list = () => restClient().get('/api/public/v3/media/entity');

exports.update = (data) => restClient().update('/api/public/v3/media/entity', data);

exports.delete = (data) => restClient().delete('/api/public/v3/media/entity', data);

exports.search = (data) => restClient().get(`/api/public/v3/media/entity/search?keyword=${data.keyword}`);

exports.publish = (data) => restClient().post('/api/public/v3/media/entity/publish', data);

exports.get_status_publish = (data) => restClient().get(`/api/public/v3/media/entity/publish/status?id=${data.id}`);

exports.get_aws_upload_key = () => restClient().get('/api/public/v3/admin/app/config/aws');
