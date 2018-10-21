import { connect } from 'react-redux'
import * as actions from '../actions/Profile'
import Profile from '../components/Profile'

const mapStateToProps = state => {
  return state.profile
}

export default connect(mapStateToProps, actions)(Profile)
