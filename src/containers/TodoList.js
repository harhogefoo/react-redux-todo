import { connect } from 'react-redux'
import * as actions from '../actions/TodoList'
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
  return {
    todo: state.todo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(actions.addTodo(todo)),
    checkTodo: (todo) => dispatch(actions.checkTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
