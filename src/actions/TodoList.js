export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: { todo: todo }
  }
}

export const removeTodo = (todo) => {
  return {
    type: 'REMOVE_TODO',
    payload: { todo: todo }
  }
}

export const checkTodo = (todo) => {
  return {
    type: 'CHECK_TODO',
    payload: { todo: todo }
  }
}
