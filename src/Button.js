var React = require('react');
var createReactClass = require('create-react-class');


var buttonStyle = {
  margin: '20px 20px 20px 0'
};

var Knapp = createReactClass({
  render: function () {
    return (
      <button
        className="btn btn-danger"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
});

module.exports = Knapp;


class Enterstock extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this); // React Component instance
  }
  render() {
    return (
      <button
        className="btn btn-danger"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
}

export default Enterstock;