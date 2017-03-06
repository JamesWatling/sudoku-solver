import { defineAction } from 'redux-define'
import { createAction, handleActions } from 'redux-actions'

import { fileStringToBoard } from 'shared/utils/converters'
import { setBoard } from './game'

export const UPLOAD_FILE = defineAction('UPLOAD_FILE',
  ['START', 'ERROR', 'SUCCESS']
)
export const uploadfileStart = createAction(UPLOAD_FILE.START)
export const uploadfileSuccess = createAction(UPLOAD_FILE.SUCCESS)
export const uploadfileError = createAction(UPLOAD_FILE.ERROR)

export const uploadFile = (file) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(uploadfileStart())

      const reader = new FileReader()

      reader.onloadend = (e) => {
        const { result } = e.target
        try {
          dispatch(uploadfileSuccess(result))
          const board = fileStringToBoard(result)
          if (board) {
            dispatch(setBoard(board))
            resolve()
          } else {
            dispatch(uploadfileError('Invalid file'))
            reject('Invalid file')
          }
        } catch (e) {
          dispatch(uploadfileError(e.toString()))
          reject(e)
        }
      }

      reader.readAsText(file)
    })
  }
}

export const constants = {
  UPLOAD_FILE
}
export const actions = {
  uploadFile,
  uploadfileSuccess
}

export const initialState = {
  file: null,
  uploading: false,
  error: null
}

export default handleActions({
  [UPLOAD_FILE.START]: state => ({
    ...state,
    uploading: true
  }),

  [UPLOAD_FILE.SUCCESS]: (state, { payload }) => ({
    ...state,
    file: payload,
    uploading: false,
    error: null
  }),

  [UPLOAD_FILE.ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
    uploading: false
  })
}, initialState)
