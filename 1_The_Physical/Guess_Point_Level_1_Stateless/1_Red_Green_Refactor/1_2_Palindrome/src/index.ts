export function isPalindrome(text: string): any {
    if (!text) return false
    const formatted = text.toLowerCase().split(' ').join('')
    const reversed = formatted.split('').reverse().join('')
    return reversed === formatted
}