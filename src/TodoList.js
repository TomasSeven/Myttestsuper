
import React from 'react';
import TodoItems from './TodoItems'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    items: [],
    stockName: "",
    numberOfStock: "",
    value: "",
    date: ""
  };

  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.updateValue = this.updateValue.bind(this);
  this.addItem = this.addItem.bind(this);
  }

addItem = (e) => {
  var itemArray = this.state.items;
  itemArray.push({
    stockName: this.state.stockName,
    numberOfStock: this.state.numberOfStock,
    value: this.state.value,
    date: this.state.date,

  });

  this.setState({
    items: itemArray,
    stockName: "",
    numberOfStock: '',
    value: '',
    date: ''
  });
}

  handleKeyUp = (event) => {
    if (event.keyCode === 13)
      return this.addItem();
  }
  
  updateValue = (e) => {
  this.setState({
    [e.target.id]: e.target.value.toUpperCase()
  });
}


  render() {
    return (
      <div className="todoListMain">
        <div className="header"
          onChange={this.updateValue} onKeyUp={this.handleKeyUp} >
          <input id="stockName" placeholder="Stock name" value={this.state.stockName} />
          <input id="numberOfStock" placeholder="Number of stock" value={this.state.numberOfStock} />
          <input id="value" placeholder="Stock price at purchase" value={this.state.value} />
          <input id="date" placeholder="Date of purchase" value={this.state.date} />
          <button onClick={this.addItem}>add</button>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
  
};

export default TodoList;