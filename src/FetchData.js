import React from 'react';


class FetchData extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      url:"",
      baseurl: "https://www.alphavantage.co/query?",
      funktion: "TIME_SERIES_INTRADAY",
    symbole: "",
    interval: "1min",
    Apikey: "XXX"
    };

    this.createUrl = this.createUrl.bind(this);
  };




  
/*
funtion createUrl = (e) => {
    this.setState( {url : this.state.baseurl + "function=" + this.state.funktion + "&symbol=" + this.props.stockName + "&interval=" + this.state.interval + "&apikey=" + this.state.apiKey
    });
    console.log(this.state.url);
  };
*/
/*
function() { 
  var url = this.state.baseurl + "function=" + this.state.funktion + "&symbol=" + this.props.stockName + "&interval=" + this.state.interval + "&apikey=" + this.state.apiKey;
console.log(url);
};
*/
/*
+ "function=" + {funktion} + "&symbol=" + {props.stockName}+ "&interval=" + {interval} + "&apikey=" + {apiKey};
*/
/*
addItem = (e) => {
  var itemArray = this.props.items;
  itemArray.push({
    stockName: this.state.stockName,
    numberOfStock: this.state.numberOfStock,
    value: this.state.value,
    date: this.state.date,

  });
*/

render() {
  
  console.log(this.state.baseurl);
  var murl = this.state.baseurl + "function=" + this.state.funktion + "&symbol=" + this.props.stockName + "&interval=" + this.state.interval + "&apikey=" + this.state.apiKey;
  console.log("Tes6tar");
  console.log(murl);

// FetchData.createUrl();//"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=XXXX"
  fetch(this.state.murl)
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


return (this.state.murl);

}

};



export default FetchData;

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