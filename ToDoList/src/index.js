import * as React from "react";
import * as ReactDom from "react-dom";
import TodoBanner from './component/TodoBanner.js';
import TodoForm from './component/TodoForm.js';
import TodoList from './component/TodoList.js';

import './index.css'


/* [TODO APP] */
var TodoApp = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<div>
				<TodoBanner/>
                    <TodoForm onFormSubmit={this.updateItems}/>
				<TodoList items={this.state.items}/>
			</div>
		);
	}
});

ReactDom.render(
    <TodoApp />,
    document.getElementById('root')
);
export default TodoApp;
