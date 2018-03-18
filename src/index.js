import React from 'react';
import Formsy from 'formsy-react';
import { render } from 'react-dom';
import Hello from './Hello';
import Enterstock from './Button';
import TodoList from './TodoList';
import ShowData from './ShowData';
import "./StockList.css";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

/*
export default class App2 extends React.Component {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {
    fetch('http://example.com/', {
      method: 'post',
      body: JSON.stringify(model)
    });
  }

  render() {
    return (
      <div style={styles}>
        <Hello name="Test" />
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
      <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <MyInput
          name="stock"
          validations="isEmail"
          validationError="This is not a valid stock"
          required
        />
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Formsy>
      <NameForm label="Myinput" />
      <Enterstock label="Add stock" />
      </div>
    );
  }
}
*/


export default class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      stockName: "",
      numberOfStock: "",
      value: "",
      date: ""
    };


  }


    disableButton() {
      this.setState({ canSubmit: false });
    }

    enableButton() {
      this.setState({ canSubmit: true });
    }

  


render() {
  return (
    <div style={styles}>
    <Hello name="Test" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <TodoList items={this.state.items}/>
    </div>

  );

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

render(<App3 />, document.getElementById('root'));
