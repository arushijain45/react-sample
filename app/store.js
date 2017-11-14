import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [
    thunk
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    reducers
  , initialState
  , compose(...enhancers)
  )

  store.asyncReducers = {}

  return store
}
