const { describe, it } = require('mocha');
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with type SUM', () => {
  it('should add positive integer arguments', () => {
    const result = calculateNumber('SUM', 5, 2);
    expect(result).to.equal(7);
  });
  it('should add negative integer arguments', () => {
    const result = calculateNumber('SUM', -5, -2);
    expect(result).to.equal(-7);
  });
  it('should add positive float arguments', () => {
    const result = calculateNumber('SUM', 1.6, 2.1);
    expect(result).to.equal(4);
  });
  it('should add negative float arguments', () => {
    const result = calculateNumber('SUM', -1.9, -2.1);
    expect(result).to.equal(-4);
  });
});

describe('calculateNumber with type SUBTRACT', () => {
  it('should subtract positive integer arguments', () => {
    const result = calculateNumber('SUBTRACT', 5, 2);
    expect(result).to.equal(3);
  });
  it('should subtract negative integer arguments', () => {
    const result = calculateNumber('SUBTRACT', -5, -2);
    expect(result).to.equal(-3);
  });
  it('should subtract positive float arguments', () => {
    const result = calculateNumber('SUBTRACT', 1.6, 2.1);
    expect(result).to.equal(0);
  });
  it('should subtract negative float arguments', () => {
    const result = calculateNumber('SUBTRACT', -1.9, -2.1);
    expect(result).to.equal(0);
  });
});

describe('calculateNumber with type DIVIDE', () => {
  it('should divide positive integer arguments', () => {
    const result = calculateNumber('DIVIDE', 5, 2);
    expect(result).to.equal(2.5);
  });
  it('should divide negative integer arguments', () => {
    const result = calculateNumber('DIVIDE', -5, -2);
    expect(result).to.equal(2.5);
  });
  it('should divide positive float arguments', () => {
    const result = calculateNumber('DIVIDE', 1.6, 2.1);
    expect(result).to.equal(1);
  });
  it('should divide negative float arguments', () => {
    const result = calculateNumber('DIVIDE', -1.9, 2.1);
    expect(result).to.equal(-1);
  });
  it('should not divide for base 0', () => {
    const result = calculateNumber('DIVIDE', 3, 0.2);
    expect(result).to.equal('Error');
  });
});
