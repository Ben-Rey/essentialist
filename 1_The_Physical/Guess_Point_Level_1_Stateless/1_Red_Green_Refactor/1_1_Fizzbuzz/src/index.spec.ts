import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return 1 when 1 is passed", () => {
        expect(fizzbuzz(1)).toBe(1);
    });
});
