
const initialState = {
  todoList: []
}

export const todoListReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TODO') {
    const addTodo = action.payload.todo
    const newState = Object.assign({}, state)
    newState.todoList.push(addTodo)
    return newState
  } else if (action.type === 'CHECK_TODO') {
    const checkTodo = action.payload.todo
    const newState = Object.assign({}, state)
    newState.todoList[checkTodo.index] = checkTodo
    return newState
  } else if (action.type === 'REMOVE_TODO') {
    const removeTodo = action.payload.todo
    const newState = Object.assign({}, state)
    newState.todoList.splice(removeTodo.index, 1)
    return newState
  } else {
    return state
  }
}
