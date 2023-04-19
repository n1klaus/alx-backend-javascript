const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('mocha');

describe('calculateNumber', function () {
  it('should round the first argument', function () {
    const result = calculateNumber(5.9, 2);
    assert.strictEqual(8, result);
  });
  it('should round the second argument', function () {
    const result = calculateNumber(5, 2.6);
    assert.strictEqual(8, result);
  });
  it('should round both argument', function () {
    const result = calculateNumber(1.6, 2.8);
    assert.strictEqual(5, result);
  });
});
