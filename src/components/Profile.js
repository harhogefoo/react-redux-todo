import React from 'react'
import ProfileContent from './ProfileContent'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      isOpen: this.props.profile.isOpen,
      isNameOpen: false,
    }
  }

  onClick() {
    const profile = {
      ...this.state,
      isOpen: !this.state.isOpen
    }
    this.setState(profile)
    // this.props.toggleProfile(profile)
  }

  render() {
    return (
      <div>
        <section>
          <button onClick={() => this.onClick()}>Profile {this.state.isOpen ? 'Close' : 'Open'}</button>
          {this.state.isOpen && <ProfileContent editProfile={this.props.editProfile} />}
        </section>
      </div>
    )
  }

}
