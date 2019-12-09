import React, {Component} from 'react';
import './Counter.css'
import PropTypes from 'prop-types'
import CounterButton from './CounterButton'

class Counter extends Component {
  constructor() {
    super() //Error 1
    this.state = {
      counter : 0
    };
    
  
  }

  render() {
    return (

      <div className="Counter">
      <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <span className="count">{this.state.counter}</span>
      <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    );
  }

  reset = () => {
    this.setState({counter: 0})
  }

  increment = (by) => {
    //console.log(`increment from child - ${by}`)
    this.setState(
        (prevState) => {
            return { counter: prevState.counter + by }
        }
    );
  }

  decrement = (by) => {
    //console.log(`increment from child - ${by}`)
    this.setState(
        (prevState) => {
            return { counter: prevState.counter - by }
        }
    );
  }
}

CounterButton.defaultProps = {
  by : 1
}

CounterButton.propTypes = {
  by : PropTypes.number
}

export default Counter;