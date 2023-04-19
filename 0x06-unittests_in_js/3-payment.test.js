import { describe, it } from 'mocha';
import { expect } from 'chai';
import { calculateNumber } from './Utils';
import { sendPaymentRequestToApi } from './3-payment';
import sinon from 'sinon';

describe('sendPaymentRequestToApi', function () {
  it('should use calculateNumber to sum the arguments', function () {
    const spiedCalculation = sinon.spy(calculateNumber);
    const spiedRequest = sinon.spy(sendPaymentRequestToApi);
    spiedRequest(100, 20);
    expect(spiedRequest.calledOnceWith(100, 20)).true;
    expect(spiedCalculation.calledOnceWith('SUM', 100, 20)).true;
  });
});
