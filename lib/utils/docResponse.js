'use strict';

module.exports = {
  Entity: {
    create: 'https://docs.uiza.io/v4/?javascript#create-entity',
    retrieve: 'https://docs.uiza.io/v4/?javascript#retrieve-an-entity',
    list: 'https://docs.uiza.io/v4/?javascript#list-entities',
    update: 'https://docs.uiza.io/v4/?javascript#update-an-entity',
    delete: 'https://docs.uiza.io/v4/?javascript#delete-an-entity',
    search: 'https://docs.uiza.io/v4/?javascript#search-entityy',
    publish: 'https://docs.uiza.io/v4/?javascript#publish-entity-to-cdn',
    get_status_publish: 'https://docs.uiza.io/v4/?javascript#get-publish-status',
    get_aws_upload_key: 'https://docs.uiza.io/v4/?javascript#get-aws-upload-key',
  },
  Category: {
    create: 'https://docs.uiza.io/v4/?javascript#create-category',
    retrieve: 'https://docs.uiza.io/v4/?javascript#retrieve-category',
    list: 'https://docs.uiza.io/v4/?javascript#list-categories',
    update: 'https://docs.uiza.io/v4/?javascript#update-a-category',
    delete: 'https://docs.uiza.io/v4/?javascript#delete-a-category',
    create_relation: 'https://docs.uiza.io/v4/?javascript#create-category-relation',
    delete_relation: 'https://docs.uiza.io/v4/?javascript#delete-category-relation',
  },
  Storage: {
    add: 'https://docs.uiza.io/v4/?javascript#add-a-storage',
    retrieve: 'https://docs.uiza.io/v4/?javascript#retrieve-a-storage',
    update: 'https://docs.uiza.io/v4/?javascript#update-storage',
    remove: 'https://docs.uiza.io/v4/?javascript#delete-a-storage',
  },
  Live: {
    create: 'https://docs.uiza.io/v4/?javascript#create-a-live-event',
    retrieve: 'https://docs.uiza.io/v4/?javascript#retrieve-a-live-event',
    update: 'https://docs.uiza.io/v4/?javascript#update-a-live-event',
    start_feed: 'https://docs.uiza.io/v4/?javascript#start-a-live-feed',
    stop_feed: 'https://docs.uiza.io/v4/?javascript#stop-a-live-feed',
    get_view: 'https://docs.uiza.io/v4/?javascript#retrieve-views',
    list_recorded: 'https://docs.uiza.io/v4/?javascript#list-recorded-files',
    delete: 'https://docs.uiza.io/v4/?javascript#delete-a-record-file',
    convert_to_vod: 'https://docs.uiza.io/v4/?javascript#convert-into-vod',
  },
  Callback: {
    create: 'https://docs.uiza.io/v4/?javascript#create-a-callback',
    retrieve: 'https://docs.uiza.io/v4/?javascript#retrieve-a-callback',
    update: 'https://docs.uiza.io/v4/?javascript#update-a-callback',
    delete: 'https://docs.uiza.io/v4/?javascript#delete-a-callback',
  },
  Analytic: {
    get_total_line: 'https://docs.uiza.io/#total-line',
    get_type: 'https://docs.uiza.io/#type',
    get_line: 'https://docs.uiza.io/#line',
  },
  User: {
    create: 'https://docs.uiza.io/v4/?javascript#create-an-user',
    retrieve: 'https://docs.uiza.io/v4/?javascript#retrieve-an-user',
    list: 'https://docs.uiza.io/v4/?javascript#list-all-users',
    update: 'https://docs.uiza.io/v4/?javascript#update-an-user',
    delete: 'https://docs.uiza.io/v4/?javascript#delete-an-user',
    change_password: 'https://docs.uiza.io/v4/?javascript#update-password',
    log_out: 'https://docs.uiza.io/v4/?javascript#log-out',
  }
}
