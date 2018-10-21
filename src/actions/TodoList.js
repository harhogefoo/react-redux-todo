export const addTodo = content => {
  return {
    type: 'ADD_TODO',
    content
  }
}

export const removeTodo = index => {
  return {
    type: 'REMOVE_TODO',
    index
  }
}

export const checkTodo = index => {
  return {
    type: 'CHECK_TODO',
    index
  }
}
