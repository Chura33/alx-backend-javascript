// 1-calcul.test.js

const assert = require('assert');
const {calculateNumber} = require('./1-calcul');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should return the sum of two rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
        });

        it('should handle negative numbers', function() {
            assert.strictEqual(calculateNumber('SUM', -3.5, 2.3), -1);
        });

        it('should handle zero correctly', function() {
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });

        it('should handle large numbers', function() {
            assert.strictEqual(calculateNumber('SUM', 1000000.1, 2000000.9), 3000001);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should return the difference of two rounded numbers', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 2.4), 4);
        });

        it('should handle negative results', function() {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 4.5), -3);
        });
    });

    describe('DIVIDE operation', function() {
        it('should return the result of division of two rounded numbers', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 8, 4), 2);
        });

        it('should handle division by zero', function() {
            assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
        });
    });
});
