import React, { Component } from 'react';
import NewItemInput from './NewItemInput';
import ToDoItems from './ToDoItems';

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
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.findItem = this.findItem.bind(this);
		this.setComplete = this.setComplete.bind(this);
		this.setIncomplete = this.setIncomplete.bind(this);
	}

	handleSubmit(event) {
		console.log("Submitted a new form item", event.target.newItem.value);
		event.preventDefault();
		const newTodo = {
			id: this.state.todos.length + 1,
			task: event.target.newItem.value,
			created: new Date(),
			completed: false
		}
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
		})
		this.setState({
			todos,
		})
	};
	setComplete(item) {
		console.log(`Setting ${item} as completed`);
		let todos = this.state.todos;
		this.findItem(item, todos).then((result) => {
			result.item.completed = true;
		})
		this.setState({
			todos,
		})

	};
	setIncomplete(item) {
		console.log(`Setting ${item} as incompleted`);
		let todos = this.state.todos;
		this.findItem(item, todos).then((result) => {
			result.item.completed = false;
		})
		this.setState({
			todos,
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