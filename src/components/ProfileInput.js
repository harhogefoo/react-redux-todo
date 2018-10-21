import React from 'react'

export default class ProfileInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: this.props.isEdit || false,
      value: this.props.value
    }
  }

  onClick() {
    const state = {
      isOpen: !this.state.isOpen
    }
    this.setState({ state })
  }

  onEdit() {
    console.log(this.props)
    this.setState({
      ...this.state,
      isEdit: !this.state.isEdit
    })
    this.props.editProfile({
      [this.props.uuid]: !this.state.isEdit,
    })
  }

  onChange(elm) {
    const value = elm.target.value
    this.setState({
      value
    })
  }

  render() {
    return (
      <div>
        {
          this.state.isEdit ?
            (<p>{this.props.label}: <input type="text" value={this.state.value} onChange={(elm) => this.onChange(elm)}></input></p>)
            : (<p>{this.props.label}: {this.props.value}<button onClick={() => this.onEdit()}>編集する</button></p>)
        }
      </div>
    )
  }

}
