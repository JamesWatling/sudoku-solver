import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const configureStore = (initialState = {}) => {
  const enhancers = []

  // https://github.com/zalmoxisus/redux-devtools-extension
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      ...enhancers
    )
  )

  return store
}

export default configureStore