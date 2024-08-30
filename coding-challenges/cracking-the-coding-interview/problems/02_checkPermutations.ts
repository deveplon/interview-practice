// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other. 
// [LeetCode](https://leetcode.com/problems/permutation-in-string/)

export default function checkPermutations (s1 : string, s2: string): boolean {
  if (s1.length !== s2.length) return false

  const s2List = s2.split('')
  for (const char of s1) {
    const index = s2List.indexOf(char)
    if (index === -1) return false
    s2List.splice(index, 1)
  }

  return !s2List.length
  
  /* sorting strings solution
    return s1.split('').sort().join('') === s2.split('').sort().join('')
  */
}
