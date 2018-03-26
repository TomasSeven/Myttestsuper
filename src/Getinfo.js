import React from "react";
import TodoList from "./TodoList";
import Loading from 'react-loading-spinkit';
import Stockstatus from './Stockstatus'


const urlForApikey = apikey =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=${apikey}`;
//xxx
var arr1 = [];
const updateArrayonName = arr1.map((item ,status, newsstatus )=> {
  if (item === status) {
    item = newsstatus;
  }
  return item;
});
  

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

const setArrayImmutable = (arr, i, value) =>
  Object.assign([...arr], { [i]: value });

class Getinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
      findstock: "",
      stockList: this.props.stocks,
     info:[],
     stockData:[],
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
 //   console.log("Start fetchfile")
//console.log("baseurl:", this.state.baseurl, this.state.key);
var myStockList = this.state.stockList;
    var fetchList = [];
for (var i = 0; i < myStockList.length; i++) {
  
  if (myStockList[i].status === "need_update"){

  var myStock = myStockList[i].stockName;
   // console.log("stockname:", myStock, "Status:", myStockList[i].status);
  var myUrl = createUrl(this.state, myStock) ;
 // console.log("Klar url",myUrl);

 fetchList.push({
   stockName: myStockList[i].stockName,
   numberOfStock: myStockList[i].numberOfStock,
   value: myStockList[i].value,
   date: myStockList[i].date,
   url: myUrl,
   status: "Will_update",
    
});
 this.setState(prevState => ({
   fetchList: [...prevState.stockList, fetchList]
 }));
// });
//  }
};
}


   // console.log("Fetchlist", fetchList);

    for (var j = 0; j < fetchList.length; j++) {  
const hej = [j];
      const updateArray = [...fetchList];
      const updateArray2 = updateArray.map(item => {
        if (item.stockName === fetchList[j].stockName) {

          item.status = 'Updating';
        }
        return item;
      });
      this.setState(prevState => ({
        fetchList: [updateArray2]
     }));
    //  console.log("Uppdaterad fetchlist", fetchList);



      fetch(fetchList[j].url).then(

        response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          throw Error("Network request failed");
        }
        if (response === "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for TIME_SERIES_INTRADAY." )
        // handle this        
        //Error Message: "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for TIME_SERIES_INTRADAY."
        {
          console.log("Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for TIME_SERIES_INTRADAY.");

          throw Error("Error");
        }
        const updateArray1 = fetchList;
        const updateArray4 = updateArray1.map(item => {
          if (item.stockName === fetchList[hej].stockName) {

            item.status = 'Updated';
          }
          return item;
        });
        this.setState({
          fetchList: this.state.updateArray4,
        });


        return response;
      })
        .then(d => d.json())
        .then(
     
        d => {
          this.setState(prevState => ({
            stockData: [...prevState.stockData, d]
          }))


        ,() => {
          this.setState({
            requestFailed: true
          });
        }
        }
        );

    }






  };
    
  
  render() {
  //  console.log("fetchalist", this.state.fetchList);

    if (this.state.requestFailed) return <p>Failed!</p>;
    if (!this.state.stockData) return <p>Loading...</p>;
   // console.log("Stockdata", this.state.stockData);
//
   // console.log("Stocks names", this.props.stocks);
   // console.log("Fetchar", this.state.fetchList);
//    alert(this.state.stockData["Meta Data"]["2. Symbol"]);
  //.["2. Symbol"]
    //console.log(this.state.stockData.map((["2. Symbol"]) => {return (["2. Symbol")]}));
  //  console.log(this.state.stockData.map((["Meta Data"]) => {return (["Meta Data")]}));
    return (
     
      <div>
       <Stockstatus list={this.state.fetchList}/>
        
        <button onClick={this.getStocks}>Refresh stocks</button>
      </div>
    );
  }
}

export default Getinfo;




//<h2>{this.state.stockData[0]["Meta Data"]["2. Symbol"]}</h2>
//  <h2>{this.state.stockData[1]["Meta Data"]["2. Symbol"]}</h2>


//data.results.map((planet) => {
    //  return planet
    // });

    //console.log(this.state.stockData.map(2. Symbol) => {return 2. Symbol} );