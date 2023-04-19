const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return answer from promise object', () => new Promise((done) => {
    const getToken = Promise.resolve(getPaymentTokenFromAPI(true));
    done();
    expect(getToken).to.deep.equal({ data: 'Successful response from the API' });
  }));
});
