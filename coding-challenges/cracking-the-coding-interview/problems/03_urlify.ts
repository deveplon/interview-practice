// 3.  URLify:

// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

export default function URLify (s1 : string): string {
  // looping
  let s2 = ''
  for (const char of s1) {
    s2 += /\s/.test(char) ? '%20' : char
  }
  return s2

  // return s1.replaceAll(' ', '%20') 

}
