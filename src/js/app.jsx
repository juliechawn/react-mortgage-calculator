import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    // getinitialState
    this.state = {
      // balance: '', rate: '', term: '', output: '0',
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculatePayment = this.calculatePayment.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  handleChange(event) {
    event.preventDefault(event);
    this.setState({
     [event.target.name]: event.target.value,
    })
  }
  calculatePayment(event) {
    event.preventDefault(event);
      var p = parseFloat(this.state.balance);
      var r = parseFloat(this.state.rate) / 100 / 12;
      var n = parseFloat(this.state.term) * 12;
      var M = p * ((r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1));
      this.setState({ output: M.toFixed(2) });
  }
  clearForm(event) {
    this.form.reset(event);
  }
  render() {
    return (
      <form className='form-horizontal'>
        <div className='container'>
          <h1>Mortgage Calculator</h1>
          <h4>Calculate your monthly mortage payment</h4>
        
        {/* input for balance */}
        <div className='row'>
        <div className='input-group mb-3'>
        <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-default'>$</span>
        </div>
          <input onChange={ this.handleChange } 
                 defaultValue={this.state.balance} 
                 className='form-control'
                 aria-label='Default' aria-describedby='inputGroup-sizing-default'  
                 name='balance' 
                 type='number' 
                 placeholder='Enter mortgage balance' />
        </div>
        </div>

        {/* input for rate */}
        <div className='row'>
        <div className='col'>
        <div className='input-group'> 
          <input onChange={ this.handleChange } 
                 defaultValue={this.state.rate} 
                 className='form-control' 
                 aria-label='Default' aria-describedby='inputGroup-sizing-default' 
                 id='number' 
                 name='rate' 
                 type='number' 
                 step='0.01' 
                 placeholder='Enter monthly interest rate' />   
          <div className='input-group-append'>
          <span className='input-group-text'>%</span>
          </div>
        </div>
        </div>

        {/* select for term */}
        <div className='col'>
        <div className='input-group mb-3'>
          <select onChange={ this.handleChange } 
                  defaultValue={this.state.term} 
                  className='custom-select'
                  aria-label='Default' aria-describedby='inputGroup-sizing-default'   
                  name='term' >
            <option value=''>Select Term</option>
            <option value='15' > 15 years </option>
            <option value='30'> 30 years </option>
          </select>
         </div> 
         </div>

         {/* submit and calculate button */}
         <div className='col'>
          <button onClick={ this.calculatePayment }
                  className='btn btn-outline-secondary' 
                  type='submit' name='submit'  > 
                  Submit 
          </button>
          </div>
          </div>

          {/* output div */}
          <div className='row'>
          <h3><div onChange={ this.handleChange } 
                name='output'>
                Your monthly payment is ${this.state.output}
          </div></h3>
          </div>

          {/* clear form button */}
          <div className='row'>    
          <button onClick={ this.clearForm } 
                  className='btn btn-outline-secondary'>
                  Clear Form
          </button>
          </div>
          </div>
      </form>
    );
  }
  }

  export default App;