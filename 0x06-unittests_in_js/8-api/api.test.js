const { expect } = require('chai');
const {
  suite, setup, teardown, test,
} = require('mocha');
const { fakeServer, spy } = require('sinon');
const request = require('request');

suite('Index page', () => {
  setup(function () {
    this.server = fakeServer.create();
  });
  teardown(function () {
    this.server.restore();
  });
  test('tests the index endpoint', function () {
    return new Promise((done) => {
      this.server.respondWith('GET', '/', [
        200,
        { 'Content-Type': 'application/json' },
        'Welcome to the payment system',
      ]);
      const spiedRequest = spy(request, 'get');
      const result = spiedRequest('http://localhost:7865/');
      done();
      this.server.respond();
      expect(spiedRequest.calledOnceWith('http://localhost:7865/')).to.be.true;
      expect(result.data).to.equal('Welcome to the payment system');
      expect(result.status).to.equal(200);
    // expect(result.contentType).to.equal({ "Content-Type": "application/json" })
    });
  });
});
