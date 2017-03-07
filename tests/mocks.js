import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import fileUpload from 'ducks/file_upload'
import game from 'ducks/game'

export const store = mockStore({ fileUpload, game })

export const fileString = `0 3 0 0 6 8 0 0 0
0 4 0 0 0 0 0 0 1
1 0 0 3 0 0 0 7 0
7 2 0 0 5 0 8 0 0
0 0 4 0 0 0 6 0 0
8 0 0 0 0 9 2 0 0
0 0 0 0 2 0 0 0 0
5 0 1 0 0 0 0 0 0
0 0 0 0 0 5 0 9 0
`

const fileParts = [
  new Blob([fileString], { type: 'text/plain' }),
  new Uint16Array(fileString.length)
]

export const file = new File(fileParts, 'input.sudoku')

export const solvedBoard = [
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
  [ '4', '5', '6', '7', '8', '9', '1', '2', '3' ],
  [ '7', '8', '9', '1', '2', '3', '4', '5', '6' ],
  [ '2', '3', '1', '6', '7', '4', '8', '9', '5' ],
  [ '8', '7', '5', '9', '1', '2', '3', '6', '4' ],
  [ '6', '9', '4', '5', '3', '8', '2', '1', '7' ],
  [ '3', '1', '7', '2', '6', '5', '9', '4', '8' ],
  [ '5', '4', '2', '8', '9', '7', '6', '3', '1' ],
  [ '9', '6', '8', '3', '4', '1', '5', '7', '2' ]
]
