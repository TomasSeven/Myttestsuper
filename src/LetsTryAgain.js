import React from "react";
import TodoList from "./TodoList";
//import Loading from 'react-loading-spinkit';
//import Stockstatus from './Stockstatus'
import Ramda from "ramda";
import Spinner from 'react-spinkit';
//import Wave from 'better-react-spinkit';
import * as FaIconPack from 'react-icons/lib/fa'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';




const createUrl = (e, stock) => {
  return e.Baseurl + "function=" + e.Function + "&symbol=" + stock + "&interval=" + e.Interval + "&apikey=" + e.Apikey;
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

    //this.refreshStocks = this.refreshStocks.bind(this);
  };
  componentDidMount() {

    function insertItem(array, action) {
      let newArray = array.slice();
      newArray.splice(action.index, 0, action.item);
      return newArray;
    }

    function removeItem(array, action) {
      let newArray = array.slice();
      newArray.splice(action.index, 1);
      return newArray;
    }

    
this.refreshStocks = (e) => {
let newArray = [...e];
console.log(newArray);
newArray.map((x) =>{
console.log(x.stockName);
let url = createUrl(this.state, x.stockName);

newArray.push(
  {
    ,
  }
)
console.log(newArray);
}
)
} 

};
  

  render() {
return (
  <div className="box-set">
{
      [...this.props.stocks].map((x) =>
       
        {
        
          if (x.loading)
          { return (
            <View style={styles.container} key={x.id}  >
              <div className="box">
             <Text>  {x.stockName} </Text>
             <Spinner name="double-bounce" className="Bounce" />
                
            </div>
            </View>
            )
            
          }
          if (Ramda.isNil(x.stockData))
          {
        return <div className="box" key={x.id}> 
          {x.stockName + " "} <FaIconPack.FaCheck /> 
        
        </div>
          }
         ;

          
          
        }
        
        )
    
}
    <button onClick={() => this.refreshStocks(this.state.stockList)}>Refresh stocks</button>
</div>

)
}
}

export default SuperInfo;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline'

  }
});


//<div key={x.id} >
/*
//loader
if (x.loading) {
  return (
    <div className="loader">
      <div className="loader-content">
        <Spinner name="wandering-cubes" />
        <div className="loader-message">{x.stockName}</div>
      </div>
    </div>
  )
}
*/

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
/*

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

*/