// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  /* Looping
  const chars = {}
  for (const char of str) {
    if (chars[char]) {
      return false
    }

    chars[char] = 1
  }

  return true
  */
  return Array.from(new Set(str.split(''))).length === str.length
}
