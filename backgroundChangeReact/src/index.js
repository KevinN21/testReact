import * as React from "react";
import * as ReactDOM from "react-dom";
import ColorPicker from "./components/ColorPicker";

// App
var App = React.createClass({
  /*setting state*/
  getInitialState: function() {
    return {
      bgColor: "teal"
    };
  },
  /*changes state*/
  handleColorChange: function (color) {
    // when we set state directly, react doesn't know
    // about it. that's why we use setState
    this.setState({ bgColor: color });
  },
  /*for the lifecycle methods*/
  updateBackgroundColor: function () {
    var body = document.querySelector('body')
    body.style.background = this.state.bgColor
  },
  /*lifecycle methods*/
  componentDidMount: function () {
    this.updateBackgroundColor()
  },
  componentDidUpdate: function () {
    this.updateBackgroundColor()
  },
  render: function() {
    return (
    /* by calling the title here on the component, we can access this.props on header */
      <div className="foo">
        <h1>Hello, World!</h1>
        <label>What color?
          <ColorPicker value={this.state.bgColor} onColorChange={this.handleColorChange}/>
        </label>
      </div>
    )
  }
});



ReactDOM.render(<App/>, document.querySelector('#main'));
