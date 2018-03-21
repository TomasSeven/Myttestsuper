import * as React from 'react';
import Link, {LinkedComponent} from 'valuelink';
import { Input } from 'valuelink/tags' 

class Addstock extends LinkedComponent {
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
    const linked = this.linkAll();
    return (
      <form onSubmit={this.onSubmit}>
        <label>
            <input placeholder="Stock name" valueLink={linked.stockName}/>
        </label>

        <label> 
          <input placeholder="Number of stock" valueLink={linked.numberStock} />
        </label>

        <label>
          <input placeholder="Stock price at purchase" valueLink={linked.stockPrice} />
        </label>

        <label>
          <input placeholder="Date of purchase" valueLink={linked.dateOfPurchase} />
        </label>

        <label> 
        Is active: <input type="checkbox"
            checkedLinked={linked.isActive}/>
        </label>
        
        <button type="submit">Add Stock</button>
      </form>
    );
  }
}
export default Addstock;