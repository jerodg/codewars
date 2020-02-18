/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />
import solution = require('./src/solution');
import {assert} from "chai";


describe("squareDigits", function() {
    it("should pass a sample test", function() {
        assert.strictEqual(solution.Kata.squareDigits(9119), 811181);
    });

    it("should pass some fixed tests", function() {
        assert.strictEqual(solution.Kata.squareDigits(3212), 9414);
        assert.strictEqual(solution.Kata.squareDigits(2112), 4114);
    });

    it("should pass some random tests", function() {
        const sol = num => Number(num.toString().split('').map(Number).map(x => x * x).map(String).join(''));

        for (let i = 0; i < 100; ++i) {
            let num = Math.floor((Math.random() * 1000) + 1);

            let actual = solution.Kata.squareDigits(num);
            let expected = sol(num);

            assert.strictEqual(actual, expected);
        }
    });
});