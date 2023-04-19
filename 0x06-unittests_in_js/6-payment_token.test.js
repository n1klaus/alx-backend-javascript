import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getPaymentTokenFromAPI } from './6-payment_token';

describe('getPaymentTokenFromAPI', function () {
  it('should return answer from promise object', function (done) {
    const getToken = Promise.resolve(getPaymentTokenFromAPI(true));
    done();
    expect(getToken).to.deep.equal({ data: 'Successful response from the API' });
  });
});
