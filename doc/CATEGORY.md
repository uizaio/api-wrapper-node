## Category
Category has been splits into 3 types: folder, playlist and tag. These will make the management of entity more easier.

See details [here](https://docs.uiza.io/#category).

## Create category
Create category for entity for easier management.\
Category use to group all the same entities into a group (like Folder/ playlist/or tag).

See details [here](https://docs.uiza.io/#create-category).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'name': 'Folder sample 2',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
}

/** create */
uiza.category.create(params)
.then((res) => {
  //Identifier of category has been created
}).catch((err) => {
  //Error
});
```

Example Response

```node
{ id: 'b8f2a6ec-d45f-4cc0-a32d-35ad0ad9f1b6' }
```

## Retrieve category
Get detail of category.

See details [here](https://docs.uiza.io/?shell#retrieve-category).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const paramsId = 'b8f2a6ec-d45f-4cc0-a32d-35ad0ad9f1b6'

uiza.category.retrieve(paramsId)
  .then((res) => {
    //Identifier of category
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ 
  id: 'b8f2a6ec-d45f-4cc0-a32d-35ad0ad9f1b6',
  name: 'Folder sample 3',
  description: 'Folder description',
  slug: 'folder-sample-3',
  type: 'folder',
  orderNumber: 1,
  icon: 'https://exemple.com/icon.png',
  status: 1,
  createdAt: '2019-02-20T07:24:32.000Z',
  updatedAt: '2019-02-20T07:24:32.000Z'
}
```

## Retrieve category list
Get all category

See details [here](https://docs.uiza.io/#retrieve-category-list).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

uiza.category.list()
  .then((res) => {
    //Identifier of category list
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
[
  { id: 'b8f2a6ec-d45f-4cc0-a32d-35ad0ad9f1b6',
    name: 'Folder sample 3',
    description: 'Folder description',
    slug: 'folder-sample-3',
    type: 'folder',
    orderNumber: 1,
    icon: 'https://exemple.com/icon.png',
    status: 1,
    createdAt: '2019-02-20T07:24:32.000Z',
    updatedAt: '2019-02-20T07:24:32.000Z' },
  { id: 'cc70863b-906b-4dda-9640-95a22ab08efa',
    name: 'd',
    description: 'b',
    slug: 'd',
    type: 'folder',
    orderNumber: 0,
    icon: 'b',
    status: 1,
    createdAt: '2019-02-20T02:53:48.000Z',
    updatedAt: '2019-02-20T02:53:48.000Z' },
  { id: '9e7b726b-e1e3-43ef-b078-93f636c7a071',
    name: 'c',
    description: 'b',
    slug: 'c',
    type: 'folder',
    orderNumber: 0,
    icon: 'b',
    status: 1,
    createdAt: '2019-02-20T02:52:18.000Z',
    updatedAt: '2019-02-20T02:52:18.000Z' },
  { id: '689d3752-5515-4e35-993b-e02f370cf46c',
    name: 'b',
    description: 'b',
    slug: 'b',
    type: 'folder',
    orderNumber: 0,
    icon: 'b',
    status: 1,
    createdAt: '2019-02-20T02:51:51.000Z',
    updatedAt: '2019-02-20T02:51:51.000Z' },
  { id: '4d0f474b-d184-4e01-aa4b-db698d1e374d',
    name: 'okkk',
    description: null,
    slug: 'okkk',
    type: 'folder',
    orderNumber: 0,
    icon: null,
    status: 1,
    createdAt: '2019-02-19T09:09:39.000Z',
    updatedAt: '2019-02-19T09:09:39.000Z' },
  { id: 'c0d3e5f2-9ae7-4e46-94a2-29612d562db0',
    name: 'Folder sample python 4',
    description: 'Folder description',
    slug: 'folder-sample-python-4',
    type: 'tag',
    orderNumber: 1,
    icon: 'https://exemple.com/icon.png',
    status: 1,
    createdAt: '2019-02-18T09:03:51.000Z',
    updatedAt: '2019-02-18T09:03:51.000Z'
  } 
]
```

## Update category
Update information of category

See details [here](https://docs.uiza.io/#update-category).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'id': 'c0d3e5f2-9ae7-4e46-94a2-29612d562db0',
  'name': 'Folder sample 312',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
}

uiza.category.update(params).then((res) => {
    //Identifier of category has been updated
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ id: 'c0d3e5f2-9ae7-4e46-94a2-29612d562db0' }
```

## Delete category
Delete category

See details [here](https://docs.uiza.io/#delete-category).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const paramsId = 'c0d3e5f2-9ae7-4e46-94a2-29612d562db0'

uiza.category.delete(paramsId)
  .then((res) => {
    //Identifier of category has been deleted
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ id: 'c0d3e5f2-9ae7-4e46-94a2-29612d562db0' }
```

## Create category relation
Add relation for entity and category

See details [here](https://docs.uiza.io/#create-category-relation).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'entityId': '16ab25d3-fd0f-4568-8aa0-0339bbfd674f',
  'metadataIds': ['095778fa-7e42-45cc-8a0e-6118e540b61d','e00586b9-032a-46a3-af71-d275f01b03cf']
}

uiza.category.create_relation(params)
.then((res) => {
    //Identifier of relation between entity and category has been created
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
[ 
  { 
    id: '79cda7c8-b6ba-45fd-8f5d-3c27bd854bbd',
    entityId: '16ab25d3-fd0f-4568-8aa0-0339bbfd674f',
    metadataId: '095778fa-7e42-45cc-8a0e-6118e540b61d'
  },
  { 
    id: '99995f01-83c1-495f-9adb-c551b81d3b8c',
    entityId: '16ab25d3-fd0f-4568-8aa0-0339bbfd674f',
    metadataId: 'e00586b9-032a-46a3-af71-d275f01b03cf'
  }
]
```

## Delete category relation
Delete relation for entity and category

See details [here](https://docs.uiza.io/#delete-category-relation).

```node
const uiza = require('uiza');
uiza.workspace_api_domain('your-workspace-api-domain.uiza.co');
uiza.authorization('your-authorization-key');

const params = {
  'entityId': 'c71965ac-8808-4854-8fc3-85a22ac9eb73',
  'metadataIds': ['689d3752-5515-4e35-993b-e02f370cf46c','32e8a1f4-e3b6-4369-a30d-60c6715896d1']
}

uiza.category.delete_relation(params).then((res) => {
    //Identifier of relation between entity and category has been deleted
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
[
  { id: '765f7be1-eab3-4c32-a55f-d688c1fc8cb4',
    entityId: 'c71965ac-8808-4854-8fc3-85a22ac9eb73',
    metadataId: '689d3752-5515-4e35-993b-e02f370cf46c'
  },
  { 
    id: '43cdd14f-6702-4296-bbe6-306b29daf99c',
    entityId: 'c71965ac-8808-4854-8fc3-85a22ac9eb73',
    metadataId: '32e8a1f4-e3b6-4369-a30d-60c6715896d1'
  }
]
```
