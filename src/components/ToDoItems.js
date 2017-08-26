import React, { Component } from 'react';

function formatDate(value)  {
   return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getYear();
}


const ToDoItems = (props) => {
	return (
		<ul className="todoList">
			{props.items.map((todo, i) => (
				<li key={'todo' + i}>
					<div className="icons check">
						<i className={"fa " + (todo.completed ? "fa-check-square-o" : "fa-square-o")}></i>						
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