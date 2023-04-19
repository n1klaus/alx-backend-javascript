const getPaymentTokenFromAPI = require('./6-payment_token');
const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should return answer from promise object', function (done) {
    const getToken = Promise.resolve(getPaymentTokenFromAPI(true));
    done();
    expect(getToken).to.deep.equal({ data: 'Successful response from the API' });
  });
});
