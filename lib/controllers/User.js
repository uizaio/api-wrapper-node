const restClient = require('../services/RestClient');

const pathURL = '/api/public/v4/admin/user';
const pathURLChangePassword = '/api/public/v4/admin/user/changePassword';
const pathURLLogout = '/api/public/v4/admin/user/logout';

const docResponse = require('../utils/docResponse').User;
const generateRequestParams = require('../utils/generateRequestParams');

exports.retrieve = (data) => restClient().get(docResponse.retrieve, `${pathURL}${generateRequestParams(data)}`);

exports.list = () => restClient().get(docResponse.list, `${pathURL}${generateRequestParams({id: ''})}`);

exports.update = (data) => restClient().update(docResponse.update, pathURL, data);

exports.change_password = (data) => restClient().post(docResponse.change_password, pathURLChangePassword, data);

exports.log_out = () => restClient().post(docResponse.log_out, pathURLLogout);

