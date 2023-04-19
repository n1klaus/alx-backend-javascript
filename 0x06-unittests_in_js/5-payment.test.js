const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.spy(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });
  it('should sendPaymentRequestToAPI with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnceWith('The total is: 120')).true;
  });
  it('should sendPaymentRequestToAPI with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnceWith('The total is: 20')).true;
  });
});
