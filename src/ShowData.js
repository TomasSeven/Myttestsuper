import React from 'react';
import TodoList from './TodoList';
import FetchData from './FetchData'


class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    stockArray: []
    };
    };

  render() {
   /* console.log(this.props.stockList);
     console.log(this.props);*/

    var stockArray = this.props.stockList;
    console.log(stockArray);
    console.log(stockArray.length);
    var entry;


    for (var i = 0; i < stockArray.length; i++) {
      var entry = stockArray[i];
      console.log(entry.stockName);
      FetchData(entry.stockName);
    }; 

    return (
   <div>Data
   </div >   
    );
  }

};

export default ShowData;