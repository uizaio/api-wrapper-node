const {keys, forEach} = require('lodash');

function generateRequestParams (data) {
  const keysArray = keys(data);
  let requestParameters = '';
  forEach(keysArray , (value, index) => {
    if (index === 0) {
      requestParameters += `?${value}=${data[value]}&`
    } else if (index === keysArray.length - 1) {
      requestParameters += `${value}=${data[value]}`
    } else {
      requestParameters += `${value}=${data[value]}&`
    }
  })
  return requestParameters
}

module.exports = generateRequestParams
