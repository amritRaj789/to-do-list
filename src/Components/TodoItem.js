import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	render(){

		const {todo, markComplete, delTodo} = this.props;

		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={() => markComplete(todo.id)}/> {' '}
					{todo.title}
					<button onClick={() => delTodo(todo.id)} style={btnStyle}>x</button>

				</p>
			</div>
		)
	}
}


//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}


const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem;