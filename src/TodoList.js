
import React from 'react';
import TodoItems from './TodoItems'
//import ShowData from './ShowData'

class TodoList extends React.Component {
/*  constructor(props) {
    super(props);
    this.state = {
    items: []
  };
*/

 // this.handleKeyUp = this.handleKeyUp.bind(this);
//  this.updateValue = this.updateValue.bind(this);
// this.addItem = this.addItem.bind(this);
//  }


/*
addItem = (e) => {
  var itemArray = this.props.items;
  itemArray.push({
    stockName: this.props.stockName,
    numberOfStock: this.props.numberOfStock,
    value: this.props.value,
    date: this.props.date,

  });

  this.setState({
    items: itemArray,
    stockName: "",
    numberOfStock: '',
    value: '',
    date: ''
  });
}
*/
/*
  handleKeyUp = (event) => {
    if (event.keyCode === 13)
      return this.addItem();
  }
*/
/*  
  updateValue = (e) => {
  this.setState({
    [e.target.id]: e.target.value.toUpperCase()
  });

  
}
*/
  
  render() {
    return (
      <div className="todoListMain">
        <div className="header"
          onChange={(e) => this.props.onChange(e)} onKeyUp={this.props.handleKeyUp} >
          <input id="stockName" placeholder="Stock name" value={this.props.stockName}  />
          <input id="numberOfStock" placeholder="Number of stock" value={this.props.numberOfStock}  />
          <input id="value" placeholder="Stock price at purchase" value={this.props.value} />
          <input id="date" placeholder="Date of purchase" value={this.props.date} />
          <button onClick={this.props.onClick}>add</button>
        </div>
     
      </div>
    );
  }
 // <ShowData stockList={this.state.items} />
};
/*
<TodoItems entries={this.state.items} />
  <ShowData entries={this.state.items} />*/
export default TodoList;