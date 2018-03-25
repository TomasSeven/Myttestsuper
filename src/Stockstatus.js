import React from "react";
import Loading from 'react-loading-spinkit';


class Stockstatus extends React.Component {
  constructor(props) {
    super(props);
  }

//

render (){


  console.log("meeep", this.props.list);

  var todoEntries = this.props.list;
  var listItems = [];
  // console.log(this.props.entries); 

  for (var i = 0; i < todoEntries.length; i++) {
    var entry = todoEntries[i];
    listItems.push(<li key={"stockName" + i}>
      
      <div style={{ height: '5vh', width: '10ovw' }}>
        <a>{entry.stockName}</a>
        <Loading show={true} />
        </div>
    </li>);

  }





return (

     <ul className="theList">
        {listItems}
      </ul>
);
};
}

export default Stockstatus;