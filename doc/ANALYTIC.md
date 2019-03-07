## Analytic
Monitor the four key dimensions of video QoS: playback failures, startup time, rebuffering, and video quality.
These 15 metrics help you track playback performance, so your team can know exactly what’s going on.

See details [here](https://docs.uiza.io/#analytic).

## Total Line
Get data grouped by hour (data refresh every 5 minutes). Track video playback on any metric performance, so you can know exactly what’s happening on every user’s device and debug more effectively.

About grouped by hour algorithm, Uiza currently support up to 16 days (it means when your time range is lower than 16 days, data response will be grouped by hour. Otherwise, it will return and to be grouped by day). In case your requested timerange doesn't have data, API won't show it in response.

See details [here](https://docs.uiza.io/#total-line).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** get_total_line */
uiza.analytic.get_total_line({
  'start_date': '2019-02-28 00:00',
  'end_date': '2019-03-01 23:00',
  'metric': 'rebuffer_count'
}).then((res) => {
  //Identifier of get_total_line
}).catch((err) => {
  //Error
});
```

Example Response

```node
[
  {
      "date_time": 1542978000000,
      "rebuffer_count": 1.6666666666666667
  },
  {
      "date_time": 1543204800000,
      "rebuffer_count": 0.5
  },
  {
      "date_time": 1543215600000,
      "rebuffer_count": 5
  }
]
```

## Type
Get data base on 4 type of filter: country, device, title, player

See details [here](https://docs.uiza.io/#type).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** get_type */
uiza.analytic.get_type({
  'start_date': '2019-01-01',
  'end_date': '2019-03-01',
  'type_filter': 'country'
}).then((res) => {
  //Identifier of get_type
}).catch((err) => {
  //Error
});
```

Example Response

```node
[
 {
  "name": "Vietnam",
  "total_view": 15,
  "percentage_of_view": 0.625
  },
  {
    "name": "Other",
    "total_view": 9,
    "percentage_of_view": 0.375
  }
]
```

## Line
Get data grouped by hour. Get total view in time range. This help you to draw a line chart to visualize data

About grouped by hour algorithm, Uiza currently support upto 16 days (it's mean when your time range is lower than 16 days, data response will be grouped by hour. Otherwise, it will return and to be grouped by day). In case your requested timerange doesn't have data, API won't show it in response.

See details [here](https://docs.uiza.io/#line).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** get_line */
uiza.analytic.get_line({
  'start_date': '2019-01-01',
  'end_date': '2019-03-01',
  'type': 'rebuffer_count'
}).then((res) => {
  //Identifier of get_line
}).catch((err) => {
  //Error
});
```

Example Response

```node
[
 {
    "day": 1541548800000,
    "total_view": 4
  },
  {
    "day": 1541635200000,
    "total_view": 5
  },
]
```
