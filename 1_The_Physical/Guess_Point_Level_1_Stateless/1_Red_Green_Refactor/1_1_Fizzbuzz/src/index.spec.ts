import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return a string", () => {
        expect(typeof fizzbuzz(1, 1)).toBe("string");
    });

    it("should return 1 when 1 is passed", () => {
        expect(fizzbuzz(1, 1)).toBe("1");
    });

    it("should return 2 when 2 is passed", () => {
        expect(fizzbuzz(2, 2)).toBe("2");
    });

    // multiple of 3
    it("should return Fizz when 3 is passed", () => {
        expect(fizzbuzz(3, 3)).toBe("Fizz");
    });

    it("should return Fizz when 6 is passed", () => {
        expect(fizzbuzz(6, 6)).toBe("Fizz");
    });

    it("should return Fizz when 12 is passed", () => {
        expect(fizzbuzz(12, 12)).toBe("Fizz");
    });

    // multiple of 5
    it("should return Buzz when 5 is passed", () => {
        expect(fizzbuzz(5, 5)).toBe("Buzz");
    });

    it("should return Buzz when 10 is passed", () => {
        expect(fizzbuzz(10, 10)).toBe("Buzz");
    });

    it("should return Buzz when 20 is passed", () => {
        expect(fizzbuzz(20, 20)).toBe("Buzz");
    });

    // multiple of 3 and 5
    it("should return FizzBuzz when 15 is passed", () => {
        expect(fizzbuzz(15, 15)).toBe("FizzBuzz");
    });

    it("should return FizzBuzz when 30 is passed", () => {
        expect(fizzbuzz(30, 30)).toBe("FizzBuzz");
    });

    it("should return FizzBuzz when 45 is passed", () => {
        expect(fizzbuzz(45, 45)).toBe("FizzBuzz");
    });

    // 1 and 2
    it("should return 1,2 when 1,2 is passed", () => {
        expect(fizzbuzz(1, 2)).toBe("12");
    });

    // 1, 2, Fizz
    it("should return 1,2,Fizz when 1,3 is passed", () => {
        expect(fizzbuzz(1, 3)).toBe("12Fizz");
    });

    // // 1, 2, Fizz, 4, Buzz
    // it("should return 1,2,Fizz,4,Buzz when 1,5 is passed", () => {
    //     expect(fizzbuzz(1, 5)).toBe("12Fizz4Buzz");
    // });

    // // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz
    // it("should return 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz when 1,10 is passed", () => {
    //     expect(fizzbuzz(1, 10)).toBe("12Fizz4BuzzFizz78FizzBuzz");
    // });

    // // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
    // it("should return 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz when 1,15 is passed", () => {
    //     expect(fizzbuzz(1, 15)).toBe("12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz");
    // });
});
