import React from 'react';

class CounterApp extends React.Component{

    state={
        count:0
    }

    addOne=()=>{
        this.setState(
            (prevstate)=>{return {
                count:prevstate.count +1
            }}
        )
    }

    minusOne=()=>{
        this.setState(
            (prestate)=>{
                return {
                    count:prestate.count -1
                }
            }
        )
    }
    reSet=()=>{
        this.setState(
            {count:0}
        )
    }


    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reSet}>Reset</button>
            </div>
        )
    }


}


export default  CounterApp;