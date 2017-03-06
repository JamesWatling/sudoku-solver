import { rows, cols } from './sudoku'

// convert the search result to a 9x9 array
export const squaresToBoard = (grid) => {
  if (typeof grid !== 'object') {
    return false
  }
  if (Object.keys(grid).length !== 81) {
    return false
  }

  const board = rows.map((row) => {
    return cols.map((col) => {
      return grid[row + col]
    })
  })

  return board
}

// convert the 9x9 array to a string
export const boardToString = (board) => {
  try {
    const boardString = board.map((rows) => {
      return rows.join('')
    }).join('')

    if (boardString.length !== 81) {
      return false
    }

    return boardString
  } catch (e) {
    return false
  }
}

export const fileStringToBoard = (file) => {
  try {
    const board = file.split('\n')
      .map((row) => {
        return row.split(' ')
          .map((column) => Number(column))
      }).slice(0, 9)
    // to check for invalid board
    if (boardToString(board).length !== 81) {
      return false
    }

    return board
  } catch (e) {
    return false
  }
}
