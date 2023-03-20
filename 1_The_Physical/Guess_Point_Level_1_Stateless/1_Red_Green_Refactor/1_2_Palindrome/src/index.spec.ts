import { isPalindrome } from './index'

describe('palindrome checker', () => {
    it('should return false for ""', () => {
        expect(isPalindrome('')).toBe(false)
    })

    it('should return true for "a"', () => {
        expect(isPalindrome('a')).toBe(true)
    })

    it('should return true for "aa"', () => {
        expect(isPalindrome('aa')).toBe(true)
    })
})

