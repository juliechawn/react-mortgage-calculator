import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    // getinitialState
    this.state = {
      inputs: {},
      output: '',
    };
    this.updateInputs = this.updateInputs.bind(this);
  }
  updateInputs(event) {
    event.preventDefault();
    // update state
    console.log('inputs updated');
    const inputs = {
      balance: this.balance.value,
      rate: this.rate.value,
      term: this.term.value,
    };
    this.setState({ inputs });
    console.log(inputs);
    this.form.reset();
  }
  calcuate(balance, rate, term) {
    const payment = balance[rate(1 + term)];
    console.log(payment);
  };

// calculation function for mortgage payment - set state to bind result to "output" - func has 4 parameters (balance, rate, term, period)- HTML add onClick event calls calculate function
  render() {
    return (
      <form onSubmit={ this.updateInputs } ref={ (input) => { this.form = input; } }className='form-horizontal'>
        <div className='container'>
          <h1>Mortgage Calculator</h1>
          <h4>Calculate your mortage balance</h4>
          <input ref={ (input) => { this.balance = input; } } id='number' name='balance' type='number' placeholder='$ Mortgage Balance' />
          <input ref={ (input) => { this.rate = input; } } id='number' name='rate' type='number' step='0.01' placeholder='% rate' />
          <select ref={ (input) => { this.term = input; } } name='term' >
            <option value='15'> 15 years </option>
            <option value='30'> 30 years </option>
          </select>
          <button type='submit' name='submit' > Submit </button>
          <div ref={ (output) => { this.output = output; } } />
        </div>
      </form>
    );
  }
  }
