import React from 'react';
import TodoList from './TodoList';
import FetchData from './FetchData'



class Api extends React.Component {
  render() {
    return (
      <Fetch url="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=XXXX">
        <ApiResponse />
      </Fetch>
    )
  }
}

// Return results, having trouble digging further that .results (see Json below)
class ApiResponse extends React.Component {
  render() {
    console.log(this.props.results)
return({}

);

  };
}

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
    var Datas = [];


    for (var i = 0; i < stockArray.length; i++) {
      var entry = stockArray[i];
      console.log(entry.stockName);
            Datas.push(FetchData.entry);
      console.log(Datas);
    }; 

    return (
   <div>Data
   </div >   
    );
  }

};

export default ShowData;