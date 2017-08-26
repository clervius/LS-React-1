import React, { Component } from 'react';
import NewItemInput from './NewItemInput';
import ToDoItems from './ToDoItems';

/*
class Todo {
	constructor (options) {
		this.task = options.task;
		this.created = new Date();
		this.completed = false;
	}
} */

class App extends Component {
	constructor () {
		super();
		this.state = {
			todos: [
				{
					task: 'This is an example task',
					created: new Date(),
					completed: false
				},
				{
					task: 'This is an another task',
					created: new Date(),
					completed: false
				}
			]
		}
	}
	render() {
		return (
			<div className="container">
				<div className="todoWrapper">
					<h1>To Do List</h1>
					<div className="todoHeader"></div>
					<div className="todoContainer">
						<NewItemInput />
						<div className="clearfix"></div>
						<ToDoItems items={this.state.todos} />
					</div>
				</div>
			</div>
		)
	}
}
export default App;