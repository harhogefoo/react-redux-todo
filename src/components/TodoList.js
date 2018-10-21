import React from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  onChange(elm) {
    this.setState({
      content: elm.target.value
    })
  }

  addTodo() {
    const { content } = this.state
    this.props.addTodo({ content })
    this.setState({
      content: ''
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

    const { content } = this.state
    return (
      <div>
        <input type="text" onChange={elm => this.onChange(elm)} value={content} />
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
