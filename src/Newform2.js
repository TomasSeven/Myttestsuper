import * as React from 'react';
import Link, { LinkedComponent } from 'valuelink';
import { Input } from 'valuelink/tags.jsx'

class Addstock2 extends LinkedComponent {
  constructor(props) {
    super(props);
  }

  onSubmit = e => {
    var itemArray = this.props.items;
    itemArray.push({
      stockName: this.state.stockName,
      numberOfStock: this.state.numberOfStock,
      value: this.state.value,
      date: this.state.date,

    });

    this.setState({
      items: itemArray,
      stockName: "",
      numberOfStock: '',
      value: '',
      date: ''
    });




  }

  render() {
    

    const stockNameLink = Link.state(this, 'Stock name')
      .check(x => x, 'Stock name is required')
      .check(x => x.indexof(' ') < 0, "Stock name shouldn't contain spaces" )
    const numberOfStockLink = Link.state(this, 'Number of stock')
      .check(x => x, 'Number of stock is required')
      .check(x => x.indexof(' ') < 0, "Number of stock shouldn't contain spaces")

    return (
      <form onSubmit={this.onSubmit}>
          <FormInput label="Stock name" valueLink={ stockNameLink } type="text"/>
        

        <label>
          <input placeholder="Number of stock" valueLink={ numberOfStockLink } />
        </label>

        <label>
          <input placeholder="Stock price at purchase" valueLink={linked.stockPrice} />
        </label>

        <label>
          <input placeholder="Date of purchase" valueLink={linked.dateOfPurchase} />
        </label>

        <label>
          Is active: <input type="checkbox"
            checkedLinked={linked.isActive} />
        </label>

        <button type="submit">Add Stock</button>
      </form>
    );


  }

 
}

const FormInput({ label, ...props }) => (
  <label> {label}
    <Input {...props} />
    <div className='error-placeholder'>
      {props.valueLink || ''}
    </div>
  </label>
);

export default Addstock2;

//https://github.com/Volicon/NestedLink/blob/master/example/src/asaf.jsx