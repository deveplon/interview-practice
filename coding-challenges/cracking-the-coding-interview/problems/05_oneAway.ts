// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  if (!str1.length && str2.length === 1) {
    return true
  } else if (Math.abs(str1.length - str2.length) > 1) {
    return false
  }

  let difference = str1.length === str2.length ? 0 : 1;
  for (let i = 0; i < str1.length; i++) {
    if (
      str1[i] === str2[i] ||
      (str1.length < str2.length && str1[i] === str2[i + 1]) ||
      (str1.length > str2.length && str1[i + 1] === str2[i])
    ) {
      continue
    } else if (str1[i] !== str2[i]) {
      difference += 1
    }

    if (difference > 1) {
      return false
    }
  }

  return true
}
