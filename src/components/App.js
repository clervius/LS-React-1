import React, { Component } from 'react';
import NewItemInput from './NewItemInput';
import ToDoItems from './ToDoItems';

class App extends Component {
	constructor () {
		super();
		this.state = {
			todos: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.findItem = this.findItem.bind(this);
		this.setComplete = this.setComplete.bind(this);
		this.setIncomplete = this.setIncomplete.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		const newTodo = {
			id: this.state.todos.length + 1,
			task: event.target.newItem.value,
			created: new Date(),
			completed: false
		}
		localStorage.setItem('todo' + this.state.todos.length + 1, JSON.stringify(newTodo));
		this.setState({
			todos: this.state.todos.concat(newTodo)
		});
		event.target.newItem.value = '';
	}
	findItem(item,items) {
		return new Promise((resolve,reject) => {
			for (let i = 0; i < items.length; i++) {
				if (item === items[i].id) {
					console.log('found ' + item);
					const result = {
						num: i,
						item: items[i]
					}
					resolve(result);
				}
			}
		})
	}
	deleteItem(item) {
		let todos = this.state.todos;
		this.findItem(item, todos).then((result) => {
			todos.splice(result.num,1);
		}).then(() => {
			localStorage.removeItem('todo' + result.num);
			this.setState({
				todos,
			})
		})
		
	};
	setComplete(item) {
		let todos = this.state.todos;
		this.findItem(item, todos).then((result) => {
			result.item.completed = true;
		}).then(() => {
			this.setState({
				todos,
			})
		})
		

	};
	setIncomplete(item) {
		let todos = this.state.todos;
		this.findItem(item, todos).then((result) => {
			result.item.completed = false;
		}).then(() => {
			this.setState({
				todos,
			})
		})
	};
	render() {
		return (
			<div className="container">
				<div className="todoWrapper">
					<h1>To Do List</h1>
					<div className="todoHeader"></div>
					<div className="todoContainer">
						<NewItemInput handleSubmit={this.handleSubmit}/>
						<div className="clearfix"></div>
						<ToDoItems 
							items={this.state.todos} 
							delete={this.deleteItem}
							setComplete={this.setComplete}
							setIncomplete={this.setIncomplete}
						/>
					</div>
				</div>
			</div>
		)
	}
}
export default App;