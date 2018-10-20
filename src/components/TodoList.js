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

  addTodo() {
    this.props.addTodo(this.state.todo)
    this.setState({
      todo: {
        ...this.state.todo,
        content: '',
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
        <input type="text" onChange={elm => this.onChange(elm)} value={this.state.todo.content} />
        <button onClick={() => this.addTodo()}>追加</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }

}
