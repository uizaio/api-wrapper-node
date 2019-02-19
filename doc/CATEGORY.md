## Category
Category has been splits into 3 types: folder, playlist and tag. These will make the management of entity more easier.

See details [here](https://docs.uiza.io/#category).

## Create category
Create category for entity for easier management.\
Category use to group all the same entities into a group (like Folder/ playlist/or tag).

See details [here](https://docs.uiza.io/#create-category).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** create */
uiza.category.create({
  'name': 'Folder sample 2',
  'type': 'folder',
  'orderNumber': 1,
  'description': 'Folder description',
  'icon': 'https://exemple.com/icon.png'
}).then((res) => console.log(res)).catch((err) => console.log(err));

```

## Retrieve category
Get detail of category.

See details [here](https://docs.uiza.io/?shell#retrieve-category).

