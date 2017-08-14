let request = require('./HttpRequestHandler');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

Promise.resolve(request.getResponse('statusCode')).should.eventually.equal(200, "status code is not 200");

Promise.resolve(request.getResponse('header')).should.eventually.have.property('content-type'
  , 'application/json; charset=utf-8', 'content-type is not correct');

Promise.resolve(request.getCountOfUsers()).should.eventually.equal(10, "count of users not eqyual 10");

