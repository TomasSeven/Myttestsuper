import React from "react";
//import Loading from 'react-loading-spinkit';
import Ramda from "ramda";


class Stockstatus extends React.Component {
  constructor(props) {
    super(props);
  }

//

render (){


//  console.log("meeep", this.props.list);

  var todoEntries = this.props.list;
 // console.log(Ramda.isEmpty(todoEntries));
  var hello = this.props.list;
 // console.log(Ramda.isEmpty(hello), Ramda.isNil(hello), hello);

  var listItems = [];
  // console.log(this.props.entries); 
  if (!Ramda.isNil(todoEntries)){

  for (var i = 0; i < todoEntries.length; i++) {
 //   console.log("todo", todoEntries[i]);
    var entry = todoEntries[i];
 //   console.log("entry",entry);
    listItems.push(<li key={"stockName" + i}>
      
      <div style={{ height: '10vh', width: '10ovw' }}>
        <a>{entry[i].stockName} 
        </a>
        </div>
    </li>);

  }
  }




return (

     <ul className="theList">
        {listItems}
      </ul>
);
};
}

export default Stockstatus;