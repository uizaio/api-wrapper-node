const restClient = require('../services/RestClient');

const pathTotalLineURL = '/api/public/v3/analytic/entity/video-quality/total-line-v2';
const pathTypeURL = '/api/public/v3/analytic/entity/video-quality/type';
const pathLineURL = '/api/public/v3/analytic/entity/video-quality/line';

const docResponse = require('../utils/docResponse').Analytic;

exports.get_total_line = (start_date, end_date, metric) => restClient().get(docResponse.get_total_line, `${pathTotalLineURL}?start_date=${start_date}&end_date=${end_date}&metric=${metric}`);

exports.get_type = (start_date, end_date, type_filter) => restClient().get(docResponse.get_type, `${pathTypeURL}?start_date=${start_date}&end_date=${end_date}&type_filter=${type_filter}`);

exports.get_line = (start_date, end_date, type) => restClient().get(docResponse.get_line, `${pathLineURL}?start_date=${start_date}&end_date=${end_date}&type=${type}`);
