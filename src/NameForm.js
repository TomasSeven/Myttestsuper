var React = require("react");
var ReactDOM = require('react-dom');



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stockList: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
   /* alert("A Stock was submitted: " + this.state.value);
    event.preventDefault(); */
    var form = this._input.value;
    var tmk = this.state.value;
    var allTmks = this.state.tmks.concat([form]);
    //Clears input on 'submit'
    this.setState({ value: '' });
    this.setState({ tmks: allTmks });
    console.log(form);
    console.log(tmk);
    console.log(allTmks);
    event.preventDefault();
   

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter new stock:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
