import React from 'react';


class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseurl: "https://www.alphavantage.co/query?",
      funktion: "TIME_SERIES_INTRADAY",
    symbole: "",
    interval: "1min",
    Apikey: "XXX"
    };
  };
/* var url = baseurl + "function=" */

/*+ funktion + "&symbol=" + props.stockName + "&interval=" + interval + "&apikey=" + apiKey;

*/
}

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