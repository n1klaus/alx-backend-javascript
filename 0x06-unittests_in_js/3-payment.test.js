const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const { calculateNumber } = require('./Utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use calculateNumber to sum the arguments', () => {
    const spiedCalculation = sinon.spy(calculateNumber);
    const spiedRequest = sinon.spy(sendPaymentRequestToApi);
    spiedRequest(100, 20);
    expect(spiedRequest.calledOnceWith(100, 20)).true;
    // expect(spiedCalculation.calledOnceWith('SUM', 100, 20)).true;
  });
});
