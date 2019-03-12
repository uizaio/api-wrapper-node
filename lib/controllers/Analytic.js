const {get} = require('lodash');

const restClient = require('../services/RestClient');

const pathTotalLineURL = '/api/public/v3/analytic/entity/video-quality/total-line-v2';
const pathTypeURL = '/api/public/v3/analytic/entity/video-quality/type';
const pathLineURL = '/api/public/v3/analytic/entity/video-quality/line';

const docResponse = require('../utils/docResponse').Analytic;

exports.get_total_line = (data) => restClient().get(docResponse.get_total_line,
  `${pathTotalLineURL}?start_date=${get(data, 'start_date')}&end_date=${get(data, 'end_date')}&metric=${get(data, 'metric')}`);

exports.get_type = (data) => restClient().get(docResponse.get_type,
  `${pathTypeURL}?start_date=${get(data, 'start_date')}&end_date=${get(data, 'end_date')}&type_filter=${get(data, 'type_filter')}`);

exports.get_line = (data) => restClient().get(docResponse.get_line,
  `${pathLineURL}?start_date=${get(data, 'start_date')}&end_date=${get(data, 'end_date')}&type=${get(data, 'type')}`);
