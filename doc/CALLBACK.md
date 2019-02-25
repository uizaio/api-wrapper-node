## Callback
Callback used to retrieve an information for Uiza to your server, so you can have a trigger notice about an entity is upload completed and .

See details [here](https://docs.uiza.io/#callback).

## Create a callback
This API will allow you setup a callback to your server when an entity is completed for upload or public
See details [here](https://docs.uiza.io/#create-a-callback).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** create */
uiza.callback.create({
  'url': 'https://callback-url.uiza.co',
  'method': 'POST'
}).then((res) => {
  //Identifier of callback has been created
}).catch((err) => {
  //Error
});
```

Example Response

```node
{  "id": "8b83886e-9cc3-4eab-9258-ebb16c0c73de" }
```

## Retrieve a callback
Retrieves the details of an existing callback.
See details [here](https://docs.uiza.io/#retrieve-a-callback).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** create */
uiza.callback.retrieve('1b1f97f9-9afd-46d1-a2e1-f3b3896374df').then((res) => {
  //Identifier of callback has been retrieved
}).catch((err) => {
  //Error
});
```

Example Response

```node
{  
  "id": "0a6bf245-1cce-494f-a193-b5a44aa05558",
  "url": "https://callback-url.uiza.co",
  "headersData": null,
  "jsonData": {
    "text": "example callback"
  },
  "method": "POST",
  "status": 1,
  "createdAt": "2018-06-23T01:27:08.000Z",
  "updatedAt": "2018-06-23T01:27:08.000Z" 
}
```

## Update a callback
This API will allow you setup a callback to your server when an entity is completed for upload or public
See details [here](https://docs.uiza.io/#update-a-callback).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** create */
uiza.callback.update({
  'id': '1b1f97f9-9afd-46d1-a2e1-f3b3896374df',
  'url': 'https://callback-url.uiza.co',
  'method': 'GET'
}).then((res) => {
  //Identifier of callback has been updated
}).catch((err) => {
  //Error
});
```

Example Response

```node
{  "id": "8b83886e-9cc3-4eab-9258-ebb16c0c73de" }
```

## Delete a callback
Retrieves the details of an existing callback.
See details [here](https://docs.uiza.io/#delete-a-callback).

```node
const uiza = require('../lib/uiza')('your-workspace-api-domain.uiza.co', 'your-authorization');

/** create */
uiza.callback.delete('1b1f97f9-9afd-46d1-a2e1-f3b3896374df').then((res) => {
  //Identifier of callback has been deleted
}).catch((err) => {
  //Error
});
```

Example Response

```node
{  "id": "8b83886e-9cc3-4eab-9258-ebb16c0c73de" }
```
