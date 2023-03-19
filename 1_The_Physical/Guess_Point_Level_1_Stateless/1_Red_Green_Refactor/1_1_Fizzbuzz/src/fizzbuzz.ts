export function fizzbuzz(nMin: number, nMax: number): string {
    const result = [];

    result.push(evaluateNumber(nMin));

    if (nMin < nMax) result.push(evaluateNumber(nMax));

    return result.join("");
}

function evaluateNumber(n: number): string {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n.toString();
}