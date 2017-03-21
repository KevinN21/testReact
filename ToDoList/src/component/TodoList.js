import * as React from "react";
import * as ReactDom from "react-dom";
/* [TODO LISTITEM] */
var TodoListItem = React.createClass({
    render: function(){
        return (
            <li className="test">{this.props.children}</li>
        );
    }
});
/* [TODO LIST] */
var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<TodoListItem>{itemText}</TodoListItem>
			);
		};
		return <ul className="test2">{this.props.items.map(createItem)}</ul>;
	}
});

export default TodoList;
