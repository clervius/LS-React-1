import React, { Component } from 'react';

const NewItemInput = (props) => {
	return (
			<form className="inputForm">
				<input type="text" name="newItem" placeholder="Type new task here..."/>
				<button>Add Item</button>
			</form>
		)
}

export default NewItemInput;