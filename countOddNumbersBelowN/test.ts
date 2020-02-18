// See https://www.chaijs.com for how to use Chai.
import {assert} from "chai";
import {oddCount} from "./src/solution";

describe("example", () => {
    it("test", () => {
        assert.equal(oddCount(7), 3);
    });
});