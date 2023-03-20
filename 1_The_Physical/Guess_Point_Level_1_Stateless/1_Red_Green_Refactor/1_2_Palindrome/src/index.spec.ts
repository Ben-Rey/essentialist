import { isPalindrome } from './index'

describe('palindrome checker', () => {
    it('sould return false for ""', () => {
        expect(isPalindrome('')).toBe(false)
    })
})

