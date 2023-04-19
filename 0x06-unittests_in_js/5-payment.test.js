import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import { sendPaymentRequestToApi } from './5-payment';
import sinon from 'sinon';

describe('sendPaymentRequestToApi', function () {
  const sandbox = sinon.createSandbox();

  beforeEach(function () {
    sandbox.spy(console, 'log');
  });

  afterEach(function () {
    sandbox.restore();
  });
  it('should sendPaymentRequestToAPI with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnceWith('The total is: 120')).true;
  });
  it('should sendPaymentRequestToAPI with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnceWith('The total is: 20')).true;
  });
});
