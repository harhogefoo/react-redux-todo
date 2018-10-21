import React from 'react'

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: {
        index: this.props.index,
        content: this.props.content,
        isCheck: this.props.isCheck,
      }
    }
  }

  onCheckBoxChange() {
    const todo = {
      ...this.state.todo,
      isCheck: !this.state.todo.isCheck,
    }
    this.setState({ todo })
    this.props.onClick(todo)
  }

  onRemoveButtonClicked() {
    this.props.onRemove(this.state.todo)
  }

  render() {
    return (
      <li key={this.state.todo.index}>
        <input
          onChange={() => this.onCheckBoxChange()}
          checked={this.state.todo.isCheck}
          type="checkbox" />
        {this.state.todo.content}
        {this.state.todo.isCheck && <button onClick={() => this.onRemoveButtonClicked()}>REMOVE</button>}
      </li>
    )
  }
}
