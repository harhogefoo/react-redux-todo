import React from 'react'

export default class TodoItem extends React.Component {
  onCheckBoxChange() {
    const { index, content, isCheck } = this.props;
    this.props.onClick({
      index, content, isCheck: !isCheck
    }) // 本当はindex だけ渡して isCheck を逆転させるロジックはreducer で書くべき
  }

  onRemoveButtonClicked() {
    const { index } = this.props;
    this.props.onRemove({ index })
  }

  render() {
    const { index, content, isCheck } = this.props;
    return (
      <li key={index}>
        <input
          onChange={() => this.onCheckBoxChange()}
          checked={isCheck}
          type="checkbox" />
        {content}
        {isCheck && <button onClick={() => this.onRemoveButtonClicked()}>REMOVE</button>}
      </li>
    )
  }
}
