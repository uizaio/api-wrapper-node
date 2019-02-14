const restClient = require('../services/RestClient');

exports.list = () => restClient().get('/api/public/v3/media/entity')

exports.create = (data) => restClient().post('/api/public/v3/media/entity', data)

exports.delete = (data) => restClient().delete('/api/public/v3/media/entity', data)

exports.update = (data) => restClient().update('/api/public/v3/media/entity', data)
