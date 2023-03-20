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

    it('should return true for "aba"', () => {
        expect(isPalindrome('aba')).toBe(true)
    })

    it('should return false for "ab"', () => {
        expect(isPalindrome('ab')).toBe(false)
    })

    it('should return true for "abba"', () => {
        expect(isPalindrome('abba')).toBe(true)
    })

    it('should return false for "abb"', () => {
        expect(isPalindrome('abb')).toBe(false)
    })

    it('should return true for "Abba"', () => {
        expect(isPalindrome('Abba')).toBe(true)
    })

    it('should return true for "Was It A Rat I Saw" (ignoring spaces)', () => {
        expect(isPalindrome('Was It A Rat I Saw')).toBe(true)
    })

    it('should return true for "Never Odd or Even" (ignoring spaces and case)', () => {
        expect(isPalindrome('Was It A Rat I Saw')).toBe(true)
    })
})

