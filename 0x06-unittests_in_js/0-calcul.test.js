const assert = require('assert');
import calculateNumber from './0-calcul';
import { describe, it } from 'mocha';

describe('calculateNumber', function () {
  it('should add positive integer arguments', function () {
    const result = calculateNumber(5, 2);
    assert.equal(7, result, 'success');
  });
  it('should add negative integer arguments', function () {
    const result = calculateNumber(-5, -2);
    assert.equal(-7, result, 'success');
  });
  it('should add positive float arguments', function () {
    const result = calculateNumber(1.6, 2.1);
    assert.equal(4, result, 'success');
  });
  it('should add negative float arguments', function () {
    const result = calculateNumber(-1.9, 2.1);
    assert.equal(0, result, 'success');
  });
});
