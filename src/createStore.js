import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { todoListReducer } from './reducers/TodoList'

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo: todoListReducer,
    }),
    applyMiddleware(
      logger,
    )
  )

  return store
}

