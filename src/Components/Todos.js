import React, {Component} from 'react';

class Todos extends Component {
	render(){
		const todos = {this.props};
		return(
			todos.map((todo) => {
				return(
					<h3>{todo.title}</h3>
				)
			})
		);
	}
}

export default Todos;