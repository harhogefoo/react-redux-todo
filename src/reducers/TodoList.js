import { getUniqueStr } from '../util'

const initialState = {
  todoList: []
}

export const todoListReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TODO') {
    const { content } = action.payload.todo
    const newState = Object.assign({}, state)
    const todo = {
      index: getUniqueStr(),
      isCheck: false,
      content,
    }
    newState.todoList.push(todo)
    return newState
  } else if (action.type === 'CHECK_TODO') {
    const { index } = action.payload.todo
    const newState = Object.assign({}, state)
    const newTodoList = newState.todoList.map(todo => {
      if (todo.index === index) {
        todo.isCheck = !todo.isCheck
      }
      return todo
    })
    newState.todoList = newTodoList
    return newState
  } else if (action.type === 'REMOVE_TODO') {
    const { index } = action.payload.todo
    const newState = Object.assign({}, state)
    const newTodoList = newState.todoList.filter((todo) => todo.index !== index)
    newState.todoList = newTodoList
    return newState
  } else {
    return state
  }
}
