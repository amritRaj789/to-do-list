import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render(){
		const {todos, markComplete, delTodo} = this.props;
		return(
			todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo}/>
			)
		));
	}
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;
