import React, { Component } from 'react';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import About from './components/pages/About';
import Address from './components/pages/Address';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with my wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  //Toggle todo
  markComplete = (id) => {
    console.log(id);
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  //Delete todo
  delTodo = (id) => {
    //console.log(id);
    this.setState({todos: [...this.state.todos.filter((todo) => todo.id !== id)]});
  }

  addTodo = (title) => {
    //console.log(title); 
    let newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route 
            exact 
            path="/" 
            render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todo 
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )} />
          
          <Route path="/about" component={About} />

          <Route path="/address" component={Address} />
        </div>
      </Router>
    );
  }
}

export default App;
