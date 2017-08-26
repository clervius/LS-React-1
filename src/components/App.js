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
					id: 0,
					task: 'This is an example task',
					created: new Date(),
					completed: false
				},
				{
					id: 1,
					task: 'This is an another task',
					created: new Date(),
					completed: false
				}
			]
		};
		this.deleteItem = this.deleteItem.bind(this);
	}
	deleteItem(item) {
		console.log('about to delete');
		let todos = this.state.todos;
		for (let i = 0; i < todos.length; i++) {
			if (item === todos[i].id) {
				todos.splice(i,1);
			}
		}
		this.setState({
			todos,
		})
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
						<ToDoItems items={this.state.todos} delete={this.deleteItem}/>
					</div>
				</div>
			</div>
		)
	}
}
export default App;