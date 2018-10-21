import React, { Component } from 'react'
import './App.css'
import TodoList from './containers/TodoList'
import Profile from './containers/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <TodoList />
      </div>
    );
  }
}

export default App;
