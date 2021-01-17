import React, {Component} from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  state = {
    todos: [
    {
      id: 1,
      title: "Take the dog for a walk",
      completed: false
    },
    {
      id: 2,
      title: "Buy some fruits",
      completed: false
    },
    {
      id: 3,
      title: "Clean the room",
      completed: false
    }
    ]
  }
  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
