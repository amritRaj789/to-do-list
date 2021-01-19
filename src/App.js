import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './Components/Todos';
import Header from './Layout/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/Pages/About';
import axios from 'axios';
// import {v4 as uuidv4} from 'uuid';

import './App.css';

class App extends Component {


  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: this.state.todos.filter((todo) => {
        return(todo.id !== id)
      })
    }))
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
  }

  //Toggle complete on checking
  markComplete = (id) => {
    console.log("from app.js with id: ", id);

    this.setState ({
      todos: this.state.todos.map((todo) => {
          if(todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
      })
    });
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} addTodo={this.addTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
