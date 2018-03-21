import React from "react";
import Formsy from "formsy-react";
import { render } from "react-dom";
import Hello from "./Hello";
import Enterstock from "./Button";
import TodoList from "./TodoList";
import Getinfo from "./Newtestfile";
import Addstock2 from "./Newform2";
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
      items: [],
      stockName: "",
      numberOfStock: "",
      value: "",
      date: "",
      name: ""
    };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }
 // console.log(this.state.items);
  render() {
    return (
      <div style={styles} className="App3">
        <Hello name="Test" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <TodoList items={this.state.items} />
        <Getinfo apikey="xxxx" stocks={this.state.items}/>
        <Addstock2 />
      </div>
    );
    // <GetData username="xxxx"></GetData>
//  <Hello name="Test" />
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
