import React from "react";
import TodoList from "./TodoList";
import Loading from 'react-loading-spinkit';
//import Stockstatus from './Stockstatus'
import Ramda from "ramda";




const createUrl = (e, stock) => {
  return e.Baseurl + "function=" + e.Functione + "&symbol=" + stock + "&interval=" + e.Interval + "&apikey=" + e.Apikey;
};

class SuperInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockList: this.props.stocks,
      Baseurl: "https://www.alphavantage.co/query?",
      Function: "TIME_SERIES_INTRADAY",
      Symbol: "",
      Interval: "1min",
      Apikey: this.props.apikey
    };

  };
  componentDidMount() {
var products = [{
  id: 0,
  name: 'Product 1'
}, {
  id: 1,
  name: 'Product 2'
}];


const productsIds = products.map(function (product) {
  return product.id;
});

console.log(productsIds); // [0, 1]

var aproductsIds = products.map(product => product.id);
console.log(aproductsIds); // [0, 1]
/* 
const updateUrls = this.props.stocks.map((x, i) =>
 {
(typeof(x.stock) =='object')?
return (<div>
testsr
</div>)


}
);
    console.log(updateUrls);

*/

};
  

  render() {
return (
<div>
{
      [...this.props.stocks].map((x) =>
        <div>
        {"name: " + x.stockName}
        </div>
        )
    
}
</div>

)
}
}

export default SuperInfo;


/*
[...this.props.stocks].map((x) =>
  <div>
    {
      (typeof (x.stock) === 'object') ?
        <div>
          {
            x.stock.map((y) =>
              <div>
                {"nane" + y.stockName}
              </div>
            )
          }
        </div>
        :
        "sdf"
    }
  </div>
)
*/