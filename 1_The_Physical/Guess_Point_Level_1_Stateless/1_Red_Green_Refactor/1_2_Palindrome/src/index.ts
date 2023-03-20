export function isPalindrome(text: string): any {
    if (!text) return false
    const formatted = text.toLowerCase()
    return formatted.toLowerCase().split('').reverse().join('') === formatted
}
