import React from "react";
import TodoList from "./TodoList";


const urlForApikey = apikey =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=${apikey}`;
//xxx


const createUrl = (e,stock) =>{
 // console.log("stockar", stock)
 // console.log("Build url", e.baseurl, e.functione, e.symbole, e.interval, e.apikey)
  return e.baseurl + "function=" + e.functione + "&symbol=" + stock + "&interval=" + e.interval + "&apikey=" + e.apikey;
 // `${e.baseurl}function=${e.functione}&symbol=${stock}&interval=${e.interval}&apikey=${e.apikey}`;

//c;

  };
/*
const TesturlFor = (...props) => (

  let urlVars = {
    url: "",
    baseurl: "https://www.alphavantage.co/query?",
    functione: "TIME_SERIES_INTRADAY",
    symbole: this.props.findstock,
    interval: "1min",
    Apikey: this.props.apikey
  };
 let url = {urlVars.baseurl} + "function=$" + {urlVars.functione};
 
 //&symbol=${urlVars.symbole}&interval=${urlVars.interval}&apikey=${urlVars.Apikey}";
//console.log(this.state.urlVars)
//return this.state.urlVars.url;
);
*/



class Getinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
      findstock: "",
     info:[],
     baseurl: "https://www.alphavantage.co/query?",
     functione: "TIME_SERIES_INTRADAY",
     symbole: "",
     interval: "1min",
apikey: this.props.apikey
    };
  
  }

 // getStocks = e => {};

/*
  componentWillReceiveProps(nextProps){
    console.log("Testing1");
    var info = this.nextProps.stocks;
  console.log(this.props.stock);
    console.log(this.nextProps.info);

  }
*/
 
  componentDidMount() {
    console.log("Start fetchfile")
console.log("baseurl:", this.state.baseurl, this.state.key);
var stockList = this.props.stocks
var fetchList = [];
for (var i = 0; i < stockList.length; i++) {
  var myStock = stockList[i].stockName;

  console.log("mystock",myStock);
  console.log("symbole", this.state.symbole);
// var myUrl = "url";
  var myUrl = createUrl(this.state, myStock) ;
  console.log("Klar url",myUrl);
  fetchList.push({
    stockName: myStock,
    url: myUrl
});

};
    console.log("Fetchlist", fetchList);

  //  console.log("1", TesturlFor(this.props));
 //   console.log(urlForApikey(this.props.apikey));
 //   console.log(urlForApikey(this.props.apikey));
    
    fetch(urlForApikey(this.props.apikey))
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          throw Error("Network request failed");
        }

// handle this        
//Error Message: "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for TIME_SERIES_INTRADAY."
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
    console.log("Stockdata", this.state.stockData);

    console.log("Stocks names", this.props.stocks);
//    alert(this.state.stockData["Meta Data"]["2. Symbol"]);
  //.["2. Symbol"]
    //console.log(this.state.stockData.map((["2. Symbol"]) => {return (["2. Symbol")]}));
  //  console.log(this.state.stockData.map((["Meta Data"]) => {return (["Meta Data")]}));
    return (
      <div>
        <h2>{this.state.stockData["Meta Data"]["2. Symbol"]}</h2>
        <button onClick={this.getStocks}>Refresh stocks</button>
      </div>
    );
  }
}

export default Getinfo;


//data.results.map((planet) => {
    //  return planet
    // });

    //console.log(this.state.stockData.map(2. Symbol) => {return 2. Symbol} );