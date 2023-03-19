import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return a string", () => {
        expect(typeof fizzbuzz(1)).toBe("string");
    });

    it("should return 1 when 1 is passed", () => {
        expect(fizzbuzz(1)).toBe("1");
    });

    it("should return 2 when 2 is passed", () => {
        expect(fizzbuzz(2)).toBe("2");
    });
});
