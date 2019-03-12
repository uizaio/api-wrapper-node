'use strict';

module.exports = {
  Entity: {
    get: 'http://dev-ap-southeast-1-api.uizadev.io/docs/#api-Media-get_entity'
  },
  Category: {
    create: 'http://dev-ap-southeast-1-api.uizadev.io/docs/#api-Media_Metadata-create_metadata',
  },
  Storage: {
    add: 'https://docs.uiza.io/#add-a-storage',
    retrieve: 'https://docs.uiza.io/#retrieve-a-storage',
    update: 'https://docs.uiza.io/#update-storage',
    remove: 'https://docs.uiza.io/#remove-storage',
  },
  Live: {
    create: 'https://docs.uiza.io/#create-a-live-event',
    retrieve: 'https://docs.uiza.io/#retrieve-a-live-event',
    update: 'https://docs.uiza.io/#update-a-live-event',
    start_feed: 'https://docs.uiza.io/#start-a-live-feed',
    get_view: 'https://docs.uiza.io/#get-view-of-live-feed',
    stop_feed: 'https://docs.uiza.io/#stop-a-live-feed',
    list_recorded: 'https://docs.uiza.io/#list-all-recorded-files',
    delete: 'https://docs.uiza.io/#delete-a-record-file',
    convert_to_vod: 'https://docs.uiza.io/#convert-into-vod',
  },
  Callback: {
    create: 'https://docs.uiza.io/#create-a-callback',
    retrieve: 'https://docs.uiza.io/#retrieve-a-callback',
    update: 'https://docs.uiza.io/#update-a-callback',
    delete: 'https://docs.uiza.io/#delete-a-callback',
  },
  Analytic: {
    get_total_line: 'https://docs.uiza.io/#total-line',
    get_type: 'https://docs.uiza.io/#type',
    get_line: 'https://docs.uiza.io/#line',
  },
  User: {
    create: 'https://docs.uiza.io/#create-an-user',
    retrieve: 'https://docs.uiza.io/#retrieve-an-user',
    list: 'https://docs.uiza.io/#list-all-users',
    update: 'https://docs.uiza.io/#update-an-user',
    delete: 'https://docs.uiza.io/#delete-an-user',
    change_password: 'https://docs.uiza.io/#update-password',
    log_out: 'https://docs.uiza.io/#log-out',
  }
}
