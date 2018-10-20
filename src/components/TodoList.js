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

  buildTodo(todo, index) {
    return (
      <TodoItem
        key={index}
        index={index}
        content={todo.content}
        isCheck={todo.isCheck}
        onClick={this.props.checkTodo}
      />
    )
  }

  render() {
    const unCheckedlist = []
    const checkedList = []

    this.props.todo.todoList.forEach((todo, index) => {
      const t = this.buildTodo(todo, index)
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
