// 0-calcul.test.js

const assert = require('assert');
const {calculateNumber} = require("./0-calcul")

describe('calculateNumber', function() {
    it('should return the sum of two rounded numbers', function() {
        assert.strictEqual(calculateNumber(1.4, 2.6), 4);
    });

    it('should handle negative numbers', function() {
        assert.strictEqual(calculateNumber(-3.5, 2.3), -1);
    });

    it('should handle zero correctly', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should handle large numbers', function() {
        assert.strictEqual(calculateNumber(1000000.1, 2000000.9), 3000001);
    });
});
