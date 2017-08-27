import React, { Component } from 'react';

const NewItemInput = (props) => {
	return (
			<form className="inputForm" onSubmit={(event) => props.handleSubmit(event)}>
				<input type="text" name="newItem" placeholder="Type new task here..."/>
				<button type="submit">Add Item</button>
			</form>
		)
}

export default NewItemInput;