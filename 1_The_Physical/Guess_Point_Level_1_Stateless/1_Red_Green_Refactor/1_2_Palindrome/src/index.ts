export function isPalindrome(text: string): any {
    if (!text) return false
    return text.split('').reverse().join('') === text
}
