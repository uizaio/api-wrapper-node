const restClient = require('../services/RestClient');

const pathURL = '/api/public/v3/admin/user';
const pathURLChangePassword = '/api/public/v3/admin/user/changepassword';
const pathURLLogout = '/api/public/v3/admin/user/logout';

const docResponse = require('../utils/docResponse').User;

exports.create = (data) => restClient().post(docResponse.create, pathURL, data);

exports.retrieve = (id) => restClient().get(docResponse.retrieve, `${pathURL}?id=${id}`);

exports.list = () => restClient().get(docResponse.list, pathURL);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.delete = (id) => restClient().delete(docResponse.delete, pathURL, {id});

exports.change_password = (data) => restClient().update(docResponse.change_password, pathURLChangePassword, data);

exports.log_out = () => restClient().post(docResponse.log_out, pathURLLogout);

