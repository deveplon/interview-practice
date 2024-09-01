// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression (str: string) : string {
  let compressed: (string | number)[] = [str[0], 0]
  let i = 0
  for (const char of str) {
    if (char !== compressed[i]) {
      i += 2
      compressed[i] = char
      compressed[i + 1] = 0
    }
    (compressed[i + 1] as number) += 1
  }

  return compressed.length >= str.length
    ? str
    : compressed.join('')
}
