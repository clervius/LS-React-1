import React, { Component } from 'react';
import render from 'react-dom';

class TodoContainer extends Component {
	constructor() {
		super();
		this.state = {}
	}
	render() {
		return (
			<div className="todoContainer">
				<NewItemInput />
				<NewItemButton />
				<div className="clearfix"></div>
				<ToDoItems items={this.state.todoItems} />
			</div>
		)
	}
}


export default TodoContainer;