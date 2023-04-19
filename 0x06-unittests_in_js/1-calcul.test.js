const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with type SUM', () => {
  it('should add positive integer arguments', () => {
    const result = calculateNumber('SUM', 5, 2);
    assert.equal(7, result);
  });
  it('should add negative integer arguments', () => {
    const result = calculateNumber('SUM', -5, -2);
    assert.equal(-7, result);
  });
  it('should add positive float arguments', () => {
    const result = calculateNumber('SUM', 1.6, 2.1);
    assert.equal(4, result);
  });
  it('should add negative float arguments', () => {
    const result = calculateNumber('SUM', -1.9, -2.1);
    assert.equal(-4, result);
  });
});

describe('calculateNumber with type SUBTRACT', () => {
  it('should subtract positive integer arguments', () => {
    const result = calculateNumber('SUBTRACT', 5, 2);
    assert.equal(3, result);
  });
  it('should subtract negative integer arguments', () => {
    const result = calculateNumber('SUBTRACT', -5, -2);
    assert.equal(-3, result);
  });
  it('should subtract positive float arguments', () => {
    const result = calculateNumber('SUBTRACT', 1.6, 2.1);
    assert.equal(0, result);
  });
  it('should subtract negative float arguments', () => {
    const result = calculateNumber('SUBTRACT', -1.9, -2.1);
    assert.equal(0, result);
  });
});

describe('calculateNumber with type DIVIDE', () => {
  it('should divide positive integer arguments', () => {
    const result = calculateNumber('DIVIDE', 5, 2);
    assert.equal(2.5, result);
  });
  it('should divide negative integer arguments', () => {
    const result = calculateNumber('DIVIDE', -5, -2);
    assert.equal(2.5, result);
  });
  it('should divide positive float arguments', () => {
    const result = calculateNumber('DIVIDE', 1.6, 2.1);
    assert.equal(1, result);
  });
  it('should divide negative float arguments', () => {
    const result = calculateNumber('DIVIDE', -1.9, 2.1);
    assert.equal(-1, result);
  });
  it('should not divide for base 0', () => {
    const result = calculateNumber('DIVIDE', 3, 0.2);
    assert.equal('Error', result);
  });
});
