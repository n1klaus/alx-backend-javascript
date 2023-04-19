const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('mocha');

describe('calculateNumber with type SUM', function () {
  it('should add positive integer arguments', function () {
    const result = calculateNumber('SUM', 5, 2);
    assert.equal(7, result);
  });
  it('should add negative integer arguments', function () {
    const result = calculateNumber('SUM', -5, -2);
    assert.equal(-7, result);
  });
  it('should add positive float arguments', function () {
    const result = calculateNumber('SUM', 1.6, 2.1);
    assert.equal(4, result);
  });
  it('should add negative float arguments', function () {
    const result = calculateNumber('SUM', -1.9, -2.1);
    assert.equal(-4, result);
  });
});

describe('calculateNumber with type SUBTRACT', function () {
  it('should subtract positive integer arguments', function () {
    const result = calculateNumber('SUBTRACT', 5, 2);
    assert.equal(3, result);
  });
  it('should subtract negative integer arguments', function () {
    const result = calculateNumber('SUBTRACT', -5, -2);
    assert.equal(-3, result);
  });
  it('should subtract positive float arguments', function () {
    const result = calculateNumber('SUBTRACT', 1.6, 2.1);
    assert.equal(0, result);
  });
  it('should subtract negative float arguments', function () {
    const result = calculateNumber('SUBTRACT', -1.9, -2.1);
    assert.equal(0, result);
  });
});

describe('calculateNumber with type DIVIDE', function () {
  it('should divide positive integer arguments', function () {
    const result = calculateNumber('DIVIDE', 5, 2);
    assert.equal(2.5, result);
  });
  it('should divide negative integer arguments', function () {
    const result = calculateNumber('DIVIDE', -5, -2);
    assert.equal(2.5, result);
  });
  it('should divide positive float arguments', function () {
    const result = calculateNumber('DIVIDE', 1.6, 2.1);
    assert.equal(1, result);
  });
  it('should divide negative float arguments', function () {
    const result = calculateNumber('DIVIDE', -1.9, 2.1);
    assert.equal(-1, result);
  });
  it('should not divide for base 0', function () {
    const result = calculateNumber('DIVIDE', 3, 0.2);
    assert.equal('Error', result);
  });
});
