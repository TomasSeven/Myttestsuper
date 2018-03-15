
import React from 'react';

class TodoItems extends React.Component {

  render() {
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
export default TodoItems;