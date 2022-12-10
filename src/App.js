import React, { Component } from 'react';
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './component/TodoInput';
import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoItem />
      </div>
    );
  }
}

export default App;
