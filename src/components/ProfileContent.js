import React from 'react'
import ProfileInput from './ProfileInput'

export default class ProfileContent extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      profile: {
        isOepn: this.props.isOpen,
        isNameOpen: this.props.isNameOpen,
        name: this.props.name || '設定されていません',
        address: this.props.name || '設定されていません',
      }
    }
  }

  onClick() {
    const profile = {
      isOpen: !this.state.profile.isOpen
    }
    this.setState(profile)
  }

  render() {
    return (
      <div>
        <section>
          <h1>設定</h1>
          <p>設定画面です</p>
          <ProfileInput label='名前' value={this.state.profile.name} editProfile={this.props.editProfile} />
          <ProfileInput label='住所' value={this.state.profile.address} editProfile={this.props.editProfile} />
        </section>
      </div>
    )
  }

}
