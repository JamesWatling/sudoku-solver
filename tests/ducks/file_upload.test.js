import fileUploadReducer, { constants, actions, initialState }  from 'ducks/file_upload'
import { store, file } from '../mocks'

describe('File Upload Duck', () => {
  describe('(Reducer)', () => {
    it('should be a function', () => {
      expect(typeof fileUploadReducer).toBe('function')
    })

    it('should initialize reducer with the initial state', () => {
      expect(fileUploadReducer(undefined, {})).toEqual(initialState)
    })
  })


  describe('(Action) File Upload', () => {
    it('should declare constants correctly', () => {
      expect(constants.UPLOAD_FILE.ACTION).toBe('UPLOAD_FILE')
      expect(constants.UPLOAD_FILE.START).toBe('UPLOAD_FILE_START')
      expect(constants.UPLOAD_FILE.ERROR).toBe('UPLOAD_FILE_ERROR')
    })

    it('should be exported as a function', () => {
      expect(typeof actions.uploadFile).toBe('function')
    })

    it('should dispatch the correct actions', () => {
      expect.assertions(3)
      return store.dispatch(actions.uploadFile(file))
        .then(() => {
          const storeActions = store.getActions()
          expect(storeActions.length).toBe(2)
          expect(storeActions[0].type).toBe('UPLOAD_FILE_START')
          expect(storeActions[1].type).toBe('SET_BOARD')
        })
        .catch((e) => {
          console.log(e)
        })
    })
  })
})
