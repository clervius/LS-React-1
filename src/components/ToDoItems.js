import React, { Component } from 'react';

function formatDate(value)  {
   return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getYear();
}


const ToDoItems = (props) => {
	return (
		<ul className="todoList">
			{props.items.map((todo, i) => (
				<li key={'todo' + i}>
					<div className="icons check" onClick={() => (todo.completed? props.setIncomplete(todo.id) : props.setComplete(todo.id) )}>
						<i 
							className={"fa " + (todo.completed ? "fa-check-square-o" : "fa-square-o")}
							title={(todo.completed ? "Mark as incomplete" : "Mark as completed")}
							></i>						
					</div>
					<p>{todo.task}
						<small>
							<strong>Created: </strong> {formatDate(todo.created)}
						</small>
					</p>
					<div className="icons delete" onClick={() => props.delete(todo.id)}>
						<i className="fa fa-trash" ></i>
					</div>
				</li>
				))}
		</ul>
	)
}

export default ToDoItems;