## Errors Code
Uiza uses conventional HTTP response codes to indicate the success or failure of an API request.
In general: Codes in the `2xx` range indicate success.
Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.).
Codes in the `5xx` range indicate an error with Uiza's servers.

See details [here](https://docs.uiza.io/#errors-code).

## HTTP status code summary
| Error Code                  | Detail                                                                    |
| ---------------------------:|:--------------------------------------------------------------------------|
| 200 - OK                    | Everything worked as expected.                                            |
| 400 - Bad Request           | The request was unacceptable, often due to missing a required parameter.  |
| 401 - Unauthorized          | No valid API key provided.                                                |
| 404 - Not Found             | The requested resource doesn't exist.                                     |
| 422 - Unprocessable         | The syntax of the request is correct (often cause of wrong parameter).    |
| 500 - Internal Server Error | We had a problem with our server. Try again later.                        |
| 503 - Service Unavailable   | The server is overloaded or down for maintenance.                         |

## Error types
| Error Type                      | Detail                                                                    |
| -------------------------------:|:--------------------------------------------------------------------------|
| 400 - BadRequestError           | The request was unacceptable, often due to missing a required parameter.  |
| 401 - UnauthorizedError         | No valid API key provided.                                                |
| 404 - NotFoundError             | The requested resource doesn't exist.                                     |
| 422 - UnprocessableError        | The syntax of the request is correct (often cause of wrong parameter).    |
| 500 - InternalServerErrorError  | We had a problem with our server. Try again later.                        |
| 503 - ServiceUnavailableError   | The server is overloaded or down for maintenance.                         |
| 4xx - ClientError               | The error seems to have been caused by the client.                        |
| 5xx - ServerError               | The server is aware that it has encountered an error.                     |

## Example Request

```node
// Note: Node.js API does not throw exceptions, and instead prefers the
// asynchronous style of error handling described below.
//
// An error from the Uiza API or an otheriwse asynchronous error

// Or in the form of a rejected promise.
// E.g. uiza.entity.retrieve('d1781e6....').then(
//        function(result) {},
//        function(err) {}
//      );

switch (err.type) {
  case 'BadRequestError':
    // A declined card error
    err.message; // => e.g. "The request was unacceptable, often due to missing a required parameter."
    err.;  // => e.g. "https://docs.uiza.io/#retrieve-an-entity"
    break;
  case 'UnauthorizedError':
    // No valid API key provided.
    break;
  case 'NotFoundError':
    // The requested resource doesn't exist.
    break;
  case 'UnprocessableError':
    // The syntax of the request is correct (often cause of wrong parameter)
    break;
  case 'InternalServerError':
    // We had a problem with our server. Try again later.
    break;
  case 'ServiceUnavailableError':
    // The server is overloaded or down for maintenance.
    break;
  case 'ClientError':
    // The error seems to have been caused by the client
    break;
  case 'ServerError':
    // The server is aware that it has encountered an error
    break;
  default:
    // Handle any other types of unexpected errors
    break;
}
```