import { getUniqueStr } from '../util'

const initialState = {
  todoList: []
}

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { index: getUniqueStr(), isCheck: false, content: action.content }
        ]
      }
    case 'CHECK_TODO':
      return {
        ...state,
        todoList: [
          ...state.todoList.map(todo => {
            if (todo.index === action.index) {
              todo.isCheck = !todo.isCheck
            }
            return todo
          }),
        ]
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todoList: [
          ...state.todoList.filter(todo => todo.index !== action.index)
        ]
      }
    default:
      return state
  }
}
