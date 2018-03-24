import React from "react";
import Formsy from "formsy-react";
import { render } from "react-dom";
import Hello from "./Hello";
import Enterstock from "./Button";
import TodoList from "./TodoList";
import Getinfo from "./Newtestfile";
import Addstock2 from "./Newform2";
import TodoItems from "./TodoItems";
import "./StockList.css";
//import ShowData from './ShowData';
//import Api from './ShowData';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      items: [
        {
          stockName: "AAPL",
          numberOfStock: "122",
          value: "120000",
          date: "2018-12-31"
        },
        {
          stockName: "MSFT",
          numberOfStock: "22",
          value: "12000",
          date: "2018-11-31"
        }
      ],
      stockData: [],
      listItems: [],
      stockName: "",
      numberOfStock: "",
      value: "",
      date: "",
      name: "",
      status: "",
      requestFailed: false
    };
  }

  updateValue = e => {
    this.setState({
      [e.target.id]: e.target.value.toUpperCase()
    });
  };

  addItem = e => {
    var itemArray = [...this.state.items];
    itemArray.push({
      stockName: this.state.stockName,
      numberOfStock: this.state.numberOfStock,
      value: this.state.value,
      date: this.state.date
    });
 

    this.setState({
      items: itemArray,
      stockName: "",
      numberOfStock: "",
      value: "",
      date: ""
    });
  };

  handleKeyUp = event => {
    if (event.keyCode === 13) return this.addItem();
  };

  render() {
    return (
      <div style={styles} className="App3">
        <h1>Testsite </h1>
        <h2>Blah blah </h2>
        <TodoList
          {...this.state}
          onChange={this.updateValue}
          onClick={this.addItem}
          handleKeyUp={this.handleKeyUp}
        />
        <TodoItems entries={this.state.items} />

        <Getinfo apikey="xxx" stocks={this.state.items} />
      </div>
    );
    //<TodoItems entries={this.state.items}/>
    //<TodoList items={this.state.stocks} stockName={this.state.stockName} numberOfStock={this.state.numberOfStock} value={this.state.value} date={this.state.date} onChange={this.updateValue} onClick={this.addItem} handleKeyUp={this.handleKeyUp}/>
    // <GetData username="xxxx"></GetData>
    //  <Hello name="Test" />

    // <Addstock2 />
  }
}
/*
ReactDOM.render((
  <div>
    <TodoList />
  </div>
), destination);
*/

/*
fetch(
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=XXXX"
)
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });
*/

render(<App3 />, document.getElementById("root"));
