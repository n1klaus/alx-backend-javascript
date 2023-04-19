const { suite, setup, teardown, test } = require('mocha');
const { fakeServer, spy } = require('sinon');
const { expect } = require('chai');
const request = require('request');

suite('Cart page', function () {
  setup(function () {
    this.server = fakeServer.create();
  });
  teardown(function () {
    this.server.restore();
  });
  test('tests the cart/:id endpoint', function (done) {
    this.server.respondWith('GET', `/cart/${12}`, [
      200,
      { 'Content-Type': 'application/json' },
      'Payment methods for cart 12'
    ]
    );
    const spiedRequest = spy(request, 'get');
    const result = spiedRequest(`http://localhost:7865/cart/${12}`);
    done();
    this.server.respond();
    expect(spiedRequest.calledOnceWith(`http://localhost:7865/cart/${12}`)).to.be.true;
    expect(result.data).to.equal('Payment methods for cart :id');
    expect(result.status).to.equal(200);
  });
});
