import { defineAction } from 'redux-define'
import { createAction, handleActions } from 'redux-actions'
import {
  squaresToBoard,
  boardToString,
  fileStringToBoard
} from 'shared/utils/converters'
import { parse_grid, search } from 'shared/utils/sudoku'

export const SET_BOARD = defineAction('SET_BOARD')
export const setBoard = createAction(SET_BOARD.ACTION)

export const solveSudoku = () => {
  return (dispatch, getState) => {
    const { board } = getState().game
    // http://norvig.com/sudoku.html uses grid as a string, so we have to parse it
    const grid = boardToString(board)
    const parsedGrid = parse_grid(grid)
    const searchResult = search(parsedGrid)
    // parse the string grid back to our board format
    const boardResult = squaresToBoard(searchResult)

    dispatch(setBoard(boardResult))
  }
}

export const constants = {
  SET_BOARD
}

export const actions = {
  solveSudoku
}

export const initialState = {
  board: fileStringToBoard(`0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0`)
}

export default handleActions({
  [SET_BOARD.ACTION]: (state, { payload }) => {
    return {
      ...state,
      board: payload
    }
  }
}, initialState)
