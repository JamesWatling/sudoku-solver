import { combineReducers } from 'redux'
import fileUpload from 'ducks/file_upload'
import game from 'ducks/game'

const rootReducer = combineReducers({
  game,
  fileUpload
})

export default rootReducer