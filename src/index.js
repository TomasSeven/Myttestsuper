import React from 'react';
import Formsy from 'formsy-react';
import { render } from 'react-dom';
import Hello from './Hello';
import Knapp from './Button';
import Enterstock from './Button';
import NameForm from './NameForm'
import MyInput from './MyInput';
import StockList from './StockList';
import StockItems from './StockItems';
import TodoList from './TodoList';
import "./StockList.css";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="Test"/>
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <input />
    <Enterstock label="Add stock"/>
    <NameForm />
    <MyInput name="Test"/>
  </div>
);

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
      <StockList />
      <TodoList />
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

render(<App3 />, document.getElementById('root'));
