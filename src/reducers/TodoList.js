import { getUniqueStr } from '../util'

export const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          index: getUniqueStr(),
          isCheck: false,
          content: action.content
        }
      ]
    case 'CHECK_TODO':
      return state.map(todo =>
        (todo.index === action.index)
          ? { ...todo, isCheck: !todo.isCheck }
          : todo
      )
    case 'REMOVE_TODO':
      return state.filter(todo => todo.index !== action.index)
    default:
      return state
  }
}
