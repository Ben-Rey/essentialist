export function fizzbuzz(nMin: number, nMax: number): string {
    let result: string = "";
    while (nMin <= nMax) result += evaluateNumber(nMin++);
    return result;
}

function evaluateNumber(n: number): string {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n.toString();
}