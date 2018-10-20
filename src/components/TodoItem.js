import React from 'react'

export default class TodoItem extends React.Component {
  state = {
    todo: {
      index: this.props.index,
      content: this.props.content,
      isCheck: this.props.isCheck,
    }
  }

  onCheckBoxChange() {
    this.setState({
      todo: {
        ...this.state.todo,
        isCheck: !this.state.todo.isCheck,
      }
    })
    this.props.onClick(this.state.todo)
  }

  render() {
    return (
      <li key={this.state.todo.index}>
        <input
          onChange={() => this.onCheckBoxChange()}
          checked={this.state.todo.isCheck}
          type="checkbox"
        ></input>
        {this.state.todo.content}
      </li>
    )
  }
}
