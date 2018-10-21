import React from 'react'

export default class TodoItem extends React.Component {
  onCheckBoxChange() {
    const { index, content, isCheck } = this.props;
    this.props.onClick({
      index, content, isCheck: !isCheck
    }) // 本当はindex だけ渡して isCheck を逆転させるロジックはreducer で書くべき
  }

  onRemoveButtonClicked() {
    const { index, content, isCheck } = this.props;
    this.props.onRemove({
      index: index, content: content, isCheck: isCheck
    }) // 本当はindex だけ渡せば良い
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
