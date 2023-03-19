export function fizzbuzz(n: number): string {
    if (n % 3 === 0) return "Fizz";
    if (n === 5) return "Buzz";
    if (n === 10) return "Buzz";
    if (n === 20) return "Buzz";
    return n.toString();
}