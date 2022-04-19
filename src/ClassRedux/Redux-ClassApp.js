import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  IncrementAction,
  DecrementAction,
  ResetAction,
  AsyncIncrement,
  AsyncDecrement
} from './action/index';


 class ReduxClassApp extends Component {
  Increment=()=>{
    const {value}=this.selectedNum;
    this.props.add(value *1)
  }
  Decrement=()=>{
    const {value}=this.selectedNum;
    this.props.minus(value *1)
  }
  Reset=()=>{
    this.props.reset()
  }

  OddNumIncrement=()=>{
    const {counter}=this.props;
    const {value}=this.selectedNum;
    if(counter %2 ===0 ){
      this.props.add(value *1)
    }
  }

  AsyncIncrement=()=>{
    const {value}=this.selectedNum;
    this.props.async(value*1, 500)
  }

  AsyncDecrement=()=>{
    const {value}=this.selectedNum;
    this.props.asyde(value*1,3000)
  }

  render() {
    return (
      <div>
          ReduxApp
           <h1>Count:{this.props.counter}</h1>
           <select ref={c=>this.selectedNum=c}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
         </select>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.OddNumIncrement}>OddNumIncrement</button>
        <button onClick={this.AsyncIncrement}>AsyncIncrement</button>
        <button onClick={this.AsyncDecrement}>AsyncDecrement</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
     
    )
  }
}


export default connect(
    state=>({
        counter:state.counter
    }),
    {add:IncrementAction,
    minus:DecrementAction,
    reset:ResetAction,
    async:AsyncIncrement,
    asyde:AsyncDecrement,
    }
)(ReduxClassApp)