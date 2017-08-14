let request = require('./HttpRequestHandler');

describe('Check response', function() {

  it('Should check responce code', () => {
    expect(request.getResponse('statusCode')).toEqual(200);
    request.getResponse('statusCode').then((val) => {
      console.log("status Code", val);
    });
  });

  it('Should check response header', () => {
    expect(request.getResponse('header')).toEqual(jasmine.objectContaining({
      'content-tye': 'application/json; charset=utf-8',
    }));
  });

});
