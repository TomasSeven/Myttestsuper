
import React from 'react';
import TodoItems from './TodoItems'

class TodoList extends React.Component {

  state = {
    items: [],
    item: "",
    description: "",
    link: ""
  };

  updateValue = (e) => {
    this.setState({
      [e.target.id]: e.target.value.toUpperCase()
    });
  }

  addItem = (e) => {
    var itemArray = this.state.items;
    itemArray.push({
      item: this.state.item,
      description: this.state.description,
      link: this.state.link
    });

    this.setState({
      items: itemArray,
      item: "",
      description: "",
      link: ""
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header"
          onChange={this.updateValue}>
          <input id="item" placeholder="item" value={this.state.item} />
          <input id="description" placeholder="description" value={this.state.description} />
          <input id="link" placeholder="link" value={this.state.link} />
          <button onClick={this.addItem}>add</button>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
};

export default TodoList;