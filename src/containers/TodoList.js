import { connect } from 'react-redux'
import * as actions from '../actions/TodoList'
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
}

export default connect(mapStateToProps, actions)(TodoList)
