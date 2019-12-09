import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'

import TodoApp from './components/todo/TodoApp'
import './bootstrap.css';


function App() {
  return (
    <div className="App">
      {/*<Counter/*/}
      <TodoApp/>
    </div>
  )
}


export default App;
