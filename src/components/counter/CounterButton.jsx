import React, {Component} from 'react';
import './Counter.css'

class CounterButton extends Component{

    constructor() {
      super() //Error 1
      this.state = {
        counter : 0
      };
    }
    
    //Define the initial state in a constructor
    //state => counter 0
    render(){
      return (
        <div className="counter">
          <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
          <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
        </div>
      )
    }
  
    increment = () => {
      console.log('increment from smiley');
  
      this.setState({
        counter: this.state.counter + this.props.by
      });
    }
  
  }

  export default CounterButton;