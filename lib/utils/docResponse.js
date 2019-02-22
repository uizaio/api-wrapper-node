'use strict';

module.exports = {
  Entity: {
    create: 'https://docs.uiza.io/#create-entity',
    retrieve: 'https://docs.uiza.io/#retrieve-an-entity',
    list: 'https://docs.uiza.io/#list-all-entities',
    update: 'https://docs.uiza.io/#update-an-entity',
    delete: 'https://docs.uiza.io/#delete-an-entity',
    search: 'https://docs.uiza.io/#search-entity',
    publish: 'https://docs.uiza.io/#publish-entity-to-cdn',
    get_status_publish: 'https://docs.uiza.io/#get-status-publish',
    get_aws_upload_key: 'https://docs.uiza.io/#get-aws-upload-key',
  },
  Category: {
    create: 'https://docs.uiza.io/#create-category',
    retrieve: 'https://docs.uiza.io/#retrieve-category',
    list: 'https://docs.uiza.io/#retrieve-category-list',
    update: 'https://docs.uiza.io/#update-category',
    delete: 'https://docs.uiza.io/#delete-category',
    create_relation: 'https://docs.uiza.io/#create-category-relation',
    delete_relation: 'https://docs.uiza.io/#delete-category-relation',
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
  }
}
