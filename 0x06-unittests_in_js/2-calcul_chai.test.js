const calculateNumber = require('./2-calcul_chai');
const { describe, it } = require('mocha');
import { expect } from 'chai';

describe('calculateNumber with type SUM', function () {
  it('should add positive integer arguments', function () {
    const result = calculateNumber('SUM', 5, 2);
    expect(result).to.equal(7);
  });
  it('should add negative integer arguments', function () {
    const result = calculateNumber('SUM', -5, -2);
    expect(result).to.equal(-7);
  });
  it('should add positive float arguments', function () {
    const result = calculateNumber('SUM', 1.6, 2.1);
    expect(result).to.equal(4);
  });
  it('should add negative float arguments', function () {
    const result = calculateNumber('SUM', -1.9, -2.1);
    expect(result).to.equal(-4);
  });
});

describe('calculateNumber with type SUBTRACT', function () {
  it('should subtract positive integer arguments', function () {
    const result = calculateNumber('SUBTRACT', 5, 2);
    expect(result).to.equal(3);
  });
  it('should subtract negative integer arguments', function () {
    const result = calculateNumber('SUBTRACT', -5, -2);
    expect(result).to.equal(-3);
  });
  it('should subtract positive float arguments', function () {
    const result = calculateNumber('SUBTRACT', 1.6, 2.1);
    expect(result).to.equal(0);
  });
  it('should subtract negative float arguments', function () {
    const result = calculateNumber('SUBTRACT', -1.9, -2.1);
    expect(result).to.equal(0);
  });
});

describe('calculateNumber with type DIVIDE', function () {
  it('should divide positive integer arguments', function () {
    const result = calculateNumber('DIVIDE', 5, 2);
    expect(result).to.equal(2.5);
  });
  it('should divide negative integer arguments', function () {
    const result = calculateNumber('DIVIDE', -5, -2);
    expect(result).to.equal(2.5);
  });
  it('should divide positive float arguments', function () {
    const result = calculateNumber('DIVIDE', 1.6, 2.1);
    expect(result).to.equal(1);
  });
  it('should divide negative float arguments', function () {
    const result = calculateNumber('DIVIDE', -1.9, 2.1);
    expect(result).to.equal(-1);
  });
  it('should not divide for base 0', function () {
    const result = calculateNumber('DIVIDE', 3, 0.2);
    expect(result).to.equal('Error');
  });
});
