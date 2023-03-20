export function isPalindrome(text: string): any {
    if (!text) return false
    const formatted = text.toLowerCase().split(' ').join('')
    return formatted.toLowerCase().split('').reverse().join('') === formatted
}
