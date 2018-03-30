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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline'

  }
});

const createUrl = (e, stock) => {
  return e.Baseurl + "function=" + e.Function + "&symbol=" + stock + "&interval=" + e.Interval + "&apikey=" + e.Apikey;
};

const myfetch = (myUrl) => {
 // console.log("empty");
 return fetch(myUrl).then(
    response => {
     //  if (response.status === 200)
         if (response.ok)
        { console.log("ok");

       /*
        if (response.includes("Invalid API call."))
        // handle this        
        //Error Message: "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for TIME_SERIES_INTRADAY."
        {
          console.log("Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for TIME_SERIES_INTRADAY.");
          throw Error("Error");
        }
        */
       // console.log("we are trying",response.json());

        return response;
      };
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        throw Error("Network request failed");
      }
      console.log("we are here");
      return "not ok";
    });
}


const ResponseError = () => { console.log("ResponseError")};
const NotFoundError = () => { console.log("NotFoundError") };
const HttpError = () => { console.log("HttpError")};
const NetworkError = () => { console.log("NetworkError")};

function testGet(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      const contentType = response.headers.get('Content-Type') || '';
console.log("cont",contentType);
      if (contentType.includes('application/json')) {
        let temp =response;
        console.log(temp);
        return response.json()
        .catch(error => {
          return Promise.reject(new ResponseError('Invalid JSON: ' + error.message));
        });
      }

      if (contentType.includes('text/html')) {
        return response.text().then(html => {
          return {
            page_type: 'generic',
            html: html
          };
        }).catch(error => {
          return Promise.reject(new ResponseError('HTML error: ' + error.message));
        })
      }

      return Promise.reject(new ResponseError('Invalid content type: ' + contentType));
    }

    if (response.status === 404) {
      return Promise.reject(new NotFoundError('Page not found: ' + url));
    }

    return Promise.reject(new HttpError('HTTP error: ' + response.status));
  }).catch(error => {
    return Promise.reject(new NetworkError(error.message));
  });
}





class SuperInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
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

    const updateStockData = (stockName, stockData) => {
    //  console.log("List", this.state.stockList);
    //  console.log("name", stockName);
    //  console.log("data", stockData);
      this.setState({
        stockList: this.state.stockList.map(
          (stockList) => stockList.stockName === stockName ? Object.assign({}, stockList, { stockData: stockData }) : stockList
        )
      })
    };

    const updateStockstatus = (stockName, status) => {
        console.log("Listan1", this.state.stockList);
        console.log("name1", stockName);
        console.log("data1", status);
      this.setState({
        stockList: this.state.stockList.map(
          (stockList) => stockList.stockName === stockName ? Object.assign({}, stockList, { loading: true }) : stockList
        )
      })

      console.log("Listan2", this.state.stockList);
    };



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

this.refreshStocks = () => {
let newArray = [...this.state.stockList];
//console.log("newA",newArray);
newArray.map((x) => {
  updateStockstatus(x.stockName, true);
  console.log("stocklist status", x.stockName, this.state.stockList);

//console.log(x.stockName);
//console.log("myur",createUrl(this.state, x.stockName));
//let asd = testGet(createUrl(this.state, x.stockName));

let data = myfetch(createUrl(this.state, x.stockName));
data.then(d => d.json())
  .then(

  d => {
    updateStockData(x.stockName, d);
  //  console.log("stockname", x.stockName);
    console.log("stocklist", x.stockName,this.state.stockList);
   // this.setState(prevState => ({
   //   result: [...prevState.result, d]
   // }))
  //  console.log("res1", this.state.result);
  //  console.log("res1", this.state.stocklist);
  return ("hello");
   } );

//fetch(createUrl(this.state, x.stockName)).json

}
)

}
}


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