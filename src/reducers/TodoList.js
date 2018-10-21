
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
    const newTodoList = newState.todoList.map(todo => {
      if (todo.index === checkTodo.index) {
        return checkTodo
      } else {
        return todo
      }
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
