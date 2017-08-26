import React, { Component } from 'react';

function formatDate(value)  {
   return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getYear();
}


const ToDoItems = (props) => {
	return (
		<ul className="todoList">
			{props.items.map((todo, i) => (
				<li key={'todo' + i} title={todo.task}>
					<p>{todo.task}
						<small>
							<strong>Created: </strong> {formatDate(todo.created)}
						</small>
					</p>
				</li>
				))}
		</ul>
	)
}

export default ToDoItems;