/*import React, { Component } from "react";*/
import React from 'react';

class StockItems extends React.Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    /*var stockEntries = this.props.entries;
    var listItems = stockEntries.map(this.createTasks);*/
    var todoEntries = this.props.entries;
    var listItems = [];

    for (var i = 0; i < todoEntries.length; i++) {
      var entry = todoEntries[i];
      listItems.push(<li key={"item" + i}>
        <a href={entry.link}>{entry.item}</a>: {entry.description}
      </li>);
    }



    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
};

export default StockItems;
