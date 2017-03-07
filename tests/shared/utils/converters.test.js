import { squaresToBoard, boardToString, fileStringToBoard } from 'shared/utils/converters'
import { squares } from 'shared/utils/sudoku'
import { fileString, solvedBoard } from '../../mocks'

describe('Converters Util', () => {
  const checkBoard = (board) => {
    expect(board.length).toBe(9)
    board.forEach((row) => {
      expect(row.length).toBe(9)

      row.forEach((number) => {
        expect(typeof number).toBe('number')
      })
    })
  }

  describe('squaresToBoard', () => {
    const grid = squares.reduce((grid, square) => {
      grid[square] = 0
      return grid
    }, {})

    const invalidGrid = {
      A1: 0,
      A2: 0,
      A3: 0
    }

    const invalidGrid2 = 'just a string'

    it('should convert squares object to a board array', () => {
      const board = squaresToBoard(grid)
      checkBoard(board)
    })

    it('should return false on invalid grid', () => {
      expect(squaresToBoard(invalidGrid)).toBe(false)
      expect(squaresToBoard(invalidGrid2)).toBe(false)
    })
  })

  describe('boardToString', () => {
    const board = solvedBoard

    it('should convert board to a string', () => {
      const boardString = boardToString(board)

      expect(boardString.length).toBe(81)
    })

    it('should return false on invalid board', () => {
      const boardString = boardToString('board')
      const boardString2 = boardToString({})
      expect(boardString).toBe(false)
      expect(boardString2).toBe(false)
    })
  })

  describe('fileStringToBoard', () => {
    it('should return valid board', () => {
      const board = fileStringToBoard(fileString)
      checkBoard(board)
    })

    it('should return false on invalid board', () => {
      const board = fileStringToBoard('12345')
      expect(board).toBe(false)
    })
  })
})
