import * as React from "react";
import * as ReactDOM from "react-dom";


// ColorPicker component
var ColorPicker = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    onColorChange: React.PropTypes.func
  },
  handleChange: function(e) {
    e.preventDefault();
    var color = e.target.value

    // If whoever rendered us (the ColorPicker) is interested
    // when the color changes, let them know
    if (this.props.onColorChange)
      this.props.onColorChange(color);
  },
  render: function() {
    return (
      <select value={this.props.value} onChange={this.handleChange}>
        <option value="orangered">orangered</option>
        <option value="teal">teal</option>
        <option value="orange">orange</option>
        <option value="indigo">indigo</option>
        <option value="red">red</option>
        <option value="coral">coral</option>
        <option value="hotpink">hotpink</option>
        <option value="magenta">magenta</option>
        <option value="cyan">cyan</option>
        <option value="aqua">aqua</option>
        <option value="lightblue">lightblue</option>
        <option value="#eeeeee">grey</option>
        <option value="#424242">dark grey</option>
      </select>
    )
  }
});

export default ColorPicker;
