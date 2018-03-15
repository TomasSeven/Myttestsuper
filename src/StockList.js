import React from 'react';

/*var ReactDOM = require('react-dom');*/


class StockList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
   /* this.handleChange = this.handleChange.bind(this);*/
    this.addItem = this.addItem.bind(this);
  }
/*
  handleChange(event) {
    console.log(event);
        this.setState({ value: event.target.value.toUpperCase()});
        console.log(event);
        console.log(event.target.value.toUpperCase());
  }*/
  addItem(e) {
    /*if (this._inputElement.value !== "") {*/
   if (this.state.value !== "") {
      var newItem = {
        text: this.state.value.toUpperCase(),
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this.state.value = "";
      /*this.setState(value) = "";*/
    }

    console.log(this.state.items);

    e.preventDefault();

  }


  render() {
    return (
      <div className="stockListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input 
            /*ref={(a) => this._inputElement = a}*/
              value={this.state.value}
             placeholder="Enter stock symbol name"
             onChange={this.handleChange}>
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default StockList;