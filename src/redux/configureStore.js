import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from './reducers'
import rootSaga from '../sagas'

const configureStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // mount it on the store
  const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  // run it
  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
