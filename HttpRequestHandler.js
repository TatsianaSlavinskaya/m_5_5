var request = require('request-promise');
var url = 'https://jsonplaceholder.typicode.com/users';

var HttpRequestHandler = function HttpRequestHandler() {

  this.sendRestRequest = function(URI, method) {
    var options = {
      uri: URI,
      method: method,
      resolveWithFullResponse: true
    };
    return request(options).then(function(response) {
      return response;
    });
  };

  this.getResponse = function(responcePart) {
    return this.sendRestRequest(url, "GET").then(response => {
      if (responcePart == 'statusCode') {
        return response.statusCode;
      } else if (responcePart == 'body') {
        return response.body;
      } else if (responcePart == 'header') {
        return response.headers;
      } else {
        return response;
      }
    });
  };

};
module.exports = new HttpRequestHandler();