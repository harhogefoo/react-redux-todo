import React from 'react'
import TodoItem from './TodoItem';
import { getUniqueStr } from '../util'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: {
        content: '',
        isCheck: false
      }
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
    const todo = {
      ...this.state.todo,
      index: getUniqueStr(),
    }
    this.props.addTodo(todo)
    this.setState({
      todo: {
        ...this.state.todo,
        content: '',
      }
    })
  }

  buildTodo(todo) {
    return (
      <TodoItem
        key={todo.index}
        index={todo.index}
        content={todo.content}
        isCheck={todo.isCheck}
        onClick={this.props.checkTodo}
        onRemove={this.props.removeTodo}
      />
    )
  }

  render() {
    const unCheckedlist = []
    const checkedList = []

    this.props.todo.todoList.forEach((todo) => {
      const t = this.buildTodo(todo)
      if (todo.isCheck) {
        checkedList.push(t)
      } else {
        unCheckedlist.push(t)
      }
    })

    return (
      <div>
        <input type="text" onChange={elm => this.onChange(elm)} value={this.state.todo.content} />
        <button onClick={() => this.addTodo()}>ADD</button>
        <section>
          <h1>Incomplete</h1>
          <ul>
            {unCheckedlist}
          </ul>
        </section>
        <section>
          <h1>complete</h1>
          <ul>
            {checkedList}
          </ul>
        </section>
      </div>
    )
  }

}
