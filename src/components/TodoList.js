import React from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  state = {
    todo: {
      content: '',
      isCheck: false
    }
  }

  onChange(elm) {
    this.setState({
      todo: {
        ...this.state.todo,
        content: elm.target.value
      }
    })
  }

  render() {
    const list = this.props.todo.todoList.map((todo, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          content={todo.content}
          isCheck={todo.isCheck}
          onClick={this.props.checkTodo}
        />
      )
    })
    return (
      <div>
        <input type="text" onChange={elm => this.onChange(elm)} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>追加</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }

}
