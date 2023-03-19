export function fizzbuzz(nMin: number, nMax: number): string {
    const result = [];
    if (nMin % 3 === 0 && nMin % 5 === 0) result.push("FizzBuzz");
    else if (nMin % 3 === 0) result.push("Fizz");
    else if (nMin % 5 === 0) result.push("Buzz");
    else result.push(nMin.toString());

    return result.join();
}