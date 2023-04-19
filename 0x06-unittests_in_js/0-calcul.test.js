const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round the first argument', () => {
    const result = calculateNumber(5.9, 2);
    assert.strictEqual(8, result);
  });
  it('should round the second argument', () => {
    const result = calculateNumber(5, 2.6);
    assert.strictEqual(8, result);
  });
  it('should round both argument', () => {
    const result = calculateNumber(1.6, 2.8);
    assert.strictEqual(5, result);
  });
});
