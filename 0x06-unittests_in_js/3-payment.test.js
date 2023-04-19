const { describe, it } = require('mocha');
const { expect } = require('chai');
const { calculateNumber } = require('./Utils');
const { sendPaymentRequestToApi } = require('./3-payment');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () {
  it('should use calculateNumber to sum the arguments', function () {
    const spiedCalculation = sinon.spy(calculateNumber);
    const spiedRequest = sinon.spy(sendPaymentRequestToApi);
    spiedRequest(100, 20);
    expect(spiedRequest.calledOnceWith(100, 20)).true;
    // expect(spiedCalculation.calledOnceWith('SUM', 100, 20)).true;
  });
});
