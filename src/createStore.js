import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { todoListReducer } from './reducers/TodoList'
import { profileReducer } from './reducers/Profile'

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo: todoListReducer,
      profile: profileReducer,
    }),
    applyMiddleware(
      logger,
    )
  )

  return store
}

