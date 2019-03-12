const {keys, forEach} = require('lodash');
const restClient = require('../services/RestClient');
const {get} = require('lodash');

function generateRequestParams (data) {
  const keysArray = keys(data);
  let requestParameters = `?appId=${get(restClient(), 'config.appId')}`;
  forEach(keysArray , (value) => {
    requestParameters += `&${value}=${data[value]}`
  })
  return requestParameters
}

module.exports = generateRequestParams
