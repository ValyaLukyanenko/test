"use strict";

function minimumSum(string) {
    var arr = string.split(',');
    var min = parseInt(arr[0], 10);
    var min2 = arr.length === 1 ? 0 : Number.MAX_SAFE_INTEGER;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= min) {
            min2 = min;
            min = parseInt(arr[i],10);
        } else if (arr[i] < min2) {
            min2 = parseInt(arr[i], 10)
        }
    }
    return min + min2;
}

var assert = require('assert');

describe("minimumSum", function() {

    it("складывает минимумы, положительные числа", function() {
        assert.equal(minimumSum("1,10,100,1000"), 11);
    });

    it("складывает минимумы, положительные, от большего к меньшему", function() {
        assert.equal(minimumSum("1000,100,10,1"), 11);
    });

    it("складывает минимумы, одно число", function() {
        assert.equal(minimumSum("1"), 1);
    });

    it("складывает минимумы, два одинаковых числа", function() {
        assert.equal(minimumSum("1,10,1"), 2);
    });

    it("складывает минимумы, введен пустой массив", function() {
        assert.equal(isNaN(minimumSum("")), true);
    });

    it("складывает минимумы, отрицательные числа", function() {
        assert.equal(minimumSum("-1,-10,-100,-1000"), -1100);
    });

    it("складывает минимумы, буквенный массив", function() {
        assert.equal(isNaN(minimumSum("a,b,c,d")), true);
    });
});
