export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: { todo: todo }
  }
}

export const checkTodo = (todo) => {
  return {
    type: 'CHECK_TODO',
    payload: { todo: todo }
  }
}
