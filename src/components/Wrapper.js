import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoContainer from './TodoContainer';

const Wrapper = (props) => {
	return (
		<div className="todoWrapper">
			<h1>To Do List</h1>
			<TodoHeader />
			<TodoContainer />
		</div>
	)
}

export default Wrapper;
