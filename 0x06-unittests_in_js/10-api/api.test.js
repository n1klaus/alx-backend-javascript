const {
  suite, setup, teardown, test,
} = require('mocha');
const { fakeServer, spy } = require('sinon');
const { expect } = require('chai');
const request = require('request');

suite('Available payments page', () => {
  setup(function () {
    this.server = fakeServer.create();
  });
  teardown(function () {
    this.server.restore();
  });
  test('tests the available_payments endpoint', function () {
    return new Promise((done) => {
      const payload = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      this.server.respondWith('GET', '/available_payments', [
        200,
        { 'Content-Type': 'application/json' },
        payload.toString(),
      ]);
      const spiedRequest = spy(request);
      const result = spiedRequest('http://localhost:7865/available_payments}');
      done();
      this.server.respond();
      expect(spiedRequest.calledOnceWith('http://localhost:7865/available_payments')).to.be.true;
      expect(result.data).to.deep.equal(payload.toString());
      expect(result.status).to.equal(200);
    });
  });
  test('tests the login endpoint', function () {
    return new Promise((done) => {
      this.server.respondWith('POST', '/login', [
        200,
        { 'Content-Type': 'application/json' },
        'Welcome Nick',
      ]);
      const spiedRequest = spy(request, 'get');
      const result = spiedRequest('http://localhost:7865/login}', { userName: 'Nick' });
      done();
      this.server.respond();
      expect(spiedRequest.calledOnceWith('http://localhost:7865/login')).to.be.true;
      expect(result.data).to.equal('Welcome Nick');
      expect(result.status).to.equal(200);
    });
  });
});
