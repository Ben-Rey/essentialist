export function isPalindrome(text: string): any {
    if (text.length === 0) return false
    if (text.length === 2 && text[0] !== text[1]) return false
    if (text.split('').reverse().join('') !== text) return false
    return true
}
