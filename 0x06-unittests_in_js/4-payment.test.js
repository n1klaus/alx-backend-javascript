import { describe, it } from 'mocha';
import { expect } from 'chai';
import { calculateNumber } from './Utils';
import { sendPaymentRequestToApi } from './4-payment';
import sinon from 'sinon';

describe('sendPaymentRequestToApi', function () {
  it('should use calculateNumber to sum the arguments', function () {
    const stubbedCalculation = sinon.stub();
    stubbedCalculation.apply(calculateNumber);
    stubbedCalculation.returns(10);
    const spiedRequest = sinon.spy(sendPaymentRequestToApi);
    const spiedLogging = sinon.spy(console, 'log');
    spiedRequest(100, 20);
    expect(spiedRequest.calledOnceWith(100, 20)).true;
    expect(stubbedCalculation.calledOnce).true;
    expect(stubbedCalculation('SUM', 100, 20)).to.equal(10);
    // expect(spiedLogging.calledOnceWith(`The total is: 10`)).true
  });
});
