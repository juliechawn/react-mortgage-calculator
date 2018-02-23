import React from 'react';

export default class App extends React.Component {
  // JS for calculation - 3 function
  constructor(props) {
    super(props);
    this.state = {
  //     balance: props.initialBalance
  //     rate: props.initialRate
  //     term: props.initialTerm

    };
  }
// constructor method to initialize the state of app - property for each input field to set initial values - HTML add value attribute to each editable input
// function update state values when input changes - use event binding - HTML add onChange event
// calculation function for mortgage payment - set state to bind result to "output" - func has 4 parameters (balance, rate, term, period)- HTML add onClick event calls calculate function
  render() {
    return (
      <div className='container'>
        <input className='balance' type='number' />
        <input className='rate' type='number' />
        <select className='term'> 15, 30 </select>
        <button className='submit'> Submit </button>
        <div className='output' />
      </div>
    );
  }
}

//{props.balance}
