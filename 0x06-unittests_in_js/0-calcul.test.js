const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('mocha');

describe('calculateNumber', function () {
  it('should round the first argument', function () {
    const result = calculateNumber(5.2, 2);
    assert.strictEqual(7, result, 'success');
  });
  it('should round the second argument', function () {
    const result = calculateNumber(5, 2.6);
    assert.strictEqual(8, result, 'success');
  });
  it('should round both argument', function () {
    const result = calculateNumber(1.6, 2.1);
    assert.strictEqual(4, result, 'success');
  });
});
