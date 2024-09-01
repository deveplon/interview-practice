// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
  const charsCounter: Record<string, number> = {}
  for (const char of str.toLowerCase()) {
    if (/\s/.test(char)) {
      continue
    }

    if (!charsCounter[char]) {
      charsCounter[char] = 0
    }
    
    charsCounter[char] += 1
  }

  let counter = 0
  for (const char in charsCounter) {
      counter += charsCounter[char] % 2
  }

  return counter <= 1
}
