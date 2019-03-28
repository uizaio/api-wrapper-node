## User Management
You can manage user with APIs user. Uiza have 2 levels of user

- Admin - This account will have the highest priority, can have permission to create & manage users.

- User - This account level is under Admin level. It only manages APIs that relates to this account.

See details [here](https://docs.uiza.io/#user-management).

## Retrieve an user
Retrieves the details of an existing user. You need only supply the unique userId that was returned upon user creation.

See details [here](https://docs.uiza.io/#retrieve-an-user).

```node
uiza.user.retrieve({
  id: '55ff6888-55b7-4d5b-b090-b5b3ad511fe7'
})
  .then((res) => {
    // Identifier of user
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{ 
  id: '55ff6888-55b7-4d5b-b090-b5b3ad511fe7',
  isAdmin: 1,
  username: 'user_test',
  email: 'user_test@uiza.io',
  avatar: 'https://exemple.com/avatar.jpeg',
  fullName: 'User Test',
  updatedAt: '2019-02-28T02:06:56.000Z',
  createdAt: '2019-02-28T02:06:56.000Z',
  status: 1
}
```

## List all users
Returns a list of your user. The users are returned sorted by creation date, with the most recent user appearing first.

If you use Admin token, you will get all the user. If you use User token, you can only get the information of that user

See details [here](https://docs.uiza.io/#list-all-users).


```node
uiza.user.list().then((res) => {
  //Get list of user including all detail.
}).catch((err) => {
  //Error
});
```

Example Response
```node
[
  { id: 'f3421298-d2c5-4cef-8245-30111b03d1d6',
    isAdmin: 0,
    username: 'ef1f5b77-617a-49ac-9562-35a87d3821d4',
    email: '214a3e8b-3600-4b23-b5a6-ec41f81ff33b@gmail.com',
    avatar: 'https://static.uiza.io/uiza_logo_128.png',
    fullName: 'ecfd28e5-0c87-41b1-a32d-fce2e741d9cd',
    updatedAt: '2019-02-27T00:00:00.000Z',
    createdAt: '2019-02-27T08:18:24.000Z',
    status: 1 },
  { id: '9e4df7c2-111d-4107-9c2e-6d2cb13c06f0',
    isAdmin: 0,
    username: 'user_test002',
    email: 'user_test002@uiza.io',
    avatar: 'https://exemple.com/avatar.jpeg',
    fullName: 'User Test',
    updatedAt: '2019-02-26T09:12:26.000Z',
    createdAt: '2019-02-26T09:12:26.000Z',
    status: 1
  }
]
```

## Update an user
Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

See details [here](https://docs.uiza.io/#update-an-user).


```node
uiza.user.update({
  'id': '9e4df7c2-111d-4107-9c2e-6d2cb13c06f0',
  'status': 0,
  'name': 'user_test_110',
  'avatar': 'https://exemple.com/avatar.jpeg',
  'dob': '2018-10-05',
}).then((res) => {
  // Identifier of user wanted to update
}).catch((err) => {
  //Error
});
```

Example Response

```node
{ id: '9e4df7c2-111d-4107-9c2e-6d2cb13c06f0' }
```

## Update password
Update password allows Admin or User update their current password.

See details [here](https://docs.uiza.io/#update-password).

```node

uiza.user.change_password({
  'userId': '263bbbb8-c0c9-4e1f-9123-af3a3fd46b80',
  'oldPassword': 'FMpsr<4[dGPu?B#u',
  'newPassword': 'S57Eb{:aMZhW=)G$'
}).then((res) => {
  // Identifier of user has been reset password
}).catch((err) => {
  //Error
});
```

Example Response
```node
{ result: 'ok' }
```

## Log Out
This API use to log out an user. After logged out, token will be removed.

See details [here](https://docs.uiza.io/#log-out).

```node
uiza.user.log_out()
  .then((res) => {
    // Identifier of task publish
  }).catch((err) => {
    //Error
  });
```

Example Response

```node
{
  message: 'Logout success',
  code: 200,
  type: 'SUCCESS'
}
```
