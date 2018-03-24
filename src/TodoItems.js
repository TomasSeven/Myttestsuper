import React from 'react';

class TodoItems extends React.Component {

    /*<a href={entry.link}>{entry.stockName}</a>: {entry.numberOfStock}*/
  render() {
   // console.log("Listan", this.props.entries); 
    var todoEntries = this.props.entries;
    var listItems = [];
   // console.log(this.props.entries); 

    for (var i = 0; i < todoEntries.length; i++) {
      var entry = todoEntries[i];
      listItems.push(<li key={"stockName" + i}>
             <a>{entry.stockName}</a>
             <a> </a>
             <a>{entry.numberOfStock}</a>
             <a> </a>
             <a>{entry.value}</a>
             <a> </a>
             <a>{entry.date}</a>
      </li>);
    }

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
};
export default TodoItems;