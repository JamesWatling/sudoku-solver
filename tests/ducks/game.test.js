import {
  constants,
  actions,
  initialState,
  default as gameReducer
} from 'ducks/game'
import { store, solvedBoard } from '../mocks'

describe('Game Duck', () => {
  describe('(Reducer)', () => {
    it('should be a function', () => {
      expect(typeof gameReducer).toBe('function')
    })

    it('should initialize reducer with the initial state', () => {
      expect(gameReducer(undefined, {})).toEqual(initialState)
    })
  })
  

  describe('(Action) Set Board', () => {
    it('should declare constants correctly', () => {
      expect(constants.SET_BOARD.ACTION).toBe('SET_BOARD')
    })
  })

  describe('(Action) Solve Sudoku', () => {
    it('should should be a function', () => {
      expect(typeof actions.solveSudoku).toBe('function')
    })

    it('should fire the correct action', () => {
      store.dispatch(actions.solveSudoku())
      const storeActions = store.getActions()

      expect(storeActions.length).toBe(1)
      expect(storeActions[0].type).toBe('SET_BOARD')
      const payload = storeActions[0].payload
      solvedBoard.forEach((row, rowIndex) => {
        row.forEach((number, numberIndex) => {
          expect(payload[rowIndex][numberIndex]).toEqual(number)
        })
      })
    })
  })
})
