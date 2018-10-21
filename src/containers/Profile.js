import { connect } from 'react-redux'
import * as actions from '../actions/Profile'
import Profile from '../components/Profile'

const mapStateToProps = state => {
  return state.profile
}

const mapDispatchToProps = dispatch => {
  return {
    toggleProfile: (profile) => dispatch(actions.toggleProfile(profile)),
    editProfile: (profile) => dispatch(actions.editProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
