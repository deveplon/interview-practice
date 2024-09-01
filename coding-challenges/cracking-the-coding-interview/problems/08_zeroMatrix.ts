// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
  const n = matrix.length
  const m = matrix[0].length
  const colMarkers: number[] = []

  for (let i = 0; i < n; i++) {
    const row = matrix[i] 
    let marker = false
    for (let j = 0; j < m; j++) {
      if (row[j] === 0) {
        colMarkers.push(j)
        marker = true
      }
    }

    if (marker) {
      matrix[i] = Array(m).fill(0)
    }
  }

  for (const j of colMarkers) {
    for (let i = 0; i < n; i++) {
      matrix[i][j] = 0
    }
  }

  return matrix
}
