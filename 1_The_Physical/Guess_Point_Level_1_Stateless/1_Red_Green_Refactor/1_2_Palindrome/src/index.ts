export function isPalindrome(text: string): any {
    if (!text) return false
    text = text.toLowerCase().replace(/ /g, '')
    const reversed = text.split('').reverse().join('')
    return text === reversed
}