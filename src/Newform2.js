import React from 'react';
import Link, { LinkedComponent } from 'valuelink';
//import { Input } from 'valuelink/tags.jsx';
import { Input, TextArea, Select, Radio, Checkbox } from 'valuelink/lib/tags';

const FormInput = ({ label, ...props }) => (
  <label> {label}
    <Input {...props} />
    <div className='error-placeholder'>
      {props.valueLink.error || ''}
    </div>
  </label>
);

const ValidatedInput = (props) => (
  <div>
    <Input { ...props } />
    <div className="validation-error">
      {props.valueLink.error || ''}
    </div>
  </div>
);


class Addstock2 extends LinkedComponent {
  constructor(props) {
    super(props);
this.state = { 
  ourArray: [],
  stockName: '',
  numberOfStock: '',
  purchaseValue: '',
  purchaseDate: ''
};

this.handleKeyUp = this.handleKeyUp.bind(this);
this.onSubmit = this.onSubmit.bind(this);
this.updateValue = this.updateValue.bind(this);
  }


  onSubmit = e => {
    var ourArray = this.props.items;
    ourArray.push({
      stockName: this.state.stockName,
      numberOfStock: this.state.numberOfStock,
      purchaseValue: this.state.purchaseValue,
      purchaseDate: this.state.purchaseDate

    });

    this.setState({
      ourArray: ourArray,
      stockName: '',
      numberOfStock: '',
      purchaseValue: '',
      purchaseDate: ''
    });
    }

   


  handleKeyUp = (event) => {
    if (event.keyCode === 13)
      return this.addItem();
  }
  updateValue = (e) => {
    this.setState({
      [e.target.id]: e.target.value.toString()
    });
  }
  //  const stockNameLink = linked(this, 'Stock name')

  render() {
    const linked = this.linkAll();

  
  //  linked.stockName.check('isRequired');
    //  .check(x => x.indexof(' ') < 0, "Stock name shouldn't contain spaces" );
    
  //  linked.numberOfStock;
    //  .check('isRequired')
    //  .check(x => x.indexof(' ') < 0, "Number of stock shouldn't contain spaces");
    
  //  linked.purchaseValue
  //    .check('isRequired');
    
  //  linked.purchaseDate
  //    .check(x => x, 'Date of purchase is required');
 

    return (
      <form onSubmit={this.onSubmit} onChange={this.updateValue} onKeyUp={this.handleKeyUp}>
        <FormInput label="Stock name" valueLink={linked.stockName} type="text"/>
        
        <FormInput label="Number of stock" valueLink={linked.numberOfStock} type="text"/>
      
          <FormInput label="Stock price at purchase" valueLink={linked.purchaseValue} type="text"/>
    
          <FormInput label="Date of purchase" valueLink={linked.purchaseDate} type="text" />
       
        <label>
          Is active: <input type="checkbox"
            checkedlink={Link.state(this, 'isActive')} />
        </label>

        <button disabled={linked.stockName.error } type="submit">Add Stock</button>
      </form>
    );
  }
  }

 




export default Addstock2;

//https://github.com/Volicon/NestedLink/blob/master/example/src/asaf.jsx
//https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112
