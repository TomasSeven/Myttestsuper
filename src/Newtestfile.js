import React from "react";
import TodoList from "./TodoList";


const urlForApikey = apikey =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=${apikey}`;
//xxx


class Getinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    };
  }


  componentDidMount() {
    console.log(this.props.stock);
    fetch(urlForApikey(this.props.apikey))
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          throw Error("Network request failed");
        }

        return response;
      })
      .then(d => d.json())
      .then(
        d => {
          this.setState({
            stockData: d
          });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>;
    if (!this.state.stockData) return <p>Loading...</p>;
    console.log("Stockdata");
    console.log(this.state.stockData);
    console.log(this.props.stocks);
//    alert(this.state.stockData["Meta Data"]["2. Symbol"]);
  //.["2. Symbol"]
    //console.log(this.state.stockData.map((["2. Symbol"]) => {return (["2. Symbol")]}));
  //  console.log(this.state.stockData.map((["Meta Data"]) => {return (["Meta Data")]}));
    return (
      <div>
        <h2>{this.state.stockData["Meta Data"]["2. Symbol"]}</h2>
      </div>
    );
  }
}

export default Getinfo;


//data.results.map((planet) => {
    //  return planet
    // });

    //console.log(this.state.stockData.map(2. Symbol) => {return 2. Symbol} );