import React, { Component } from 'react';
import './App.css';




export default class App extends Component {

  state={
    title:'Indecision App',
    subtitle:'Put Your Life in the Hands of Automation',
    options:[]
  }


 onFormSubmit=(event)=>{
    event.preventDefault();
    const inputOption=event.target.elements.option.value;
    if(inputOption){
      this.state.options.push(inputOption);
      event.target.elements.option.value="";
    }
    this.setState({options:this.state.options})
  }


 handleRemoveAll=()=>{
    this.state.options=[];
  }


  makedecision=()=>{
    const randomNum=Math.floor ((Math.random()* this.state.options.length)); 
    const option=this.state.options[randomNum];
    alert(option)
  }


  render() {
    return (
      <div>
          <h1>{this.state.title}</h1>
          <p>{(this.state.options.length > 0) ? 'Here are your options' : 'No options'}</p>
          <p>{this.state.options.length}</p>
          {this.state.subtitle && <h3>{this.state.subtitle}</h3>}
          <div className='mainpart'>
          <p>here is the list</p>
    
         <div className='mainpart'>
        <form 
            className='myform'
            onSubmit={this.onFormSubmit}>
            <input type='text' name='option' className='myinput'/>
            <button className='addbtn'>Add Option</button>
            <button className='addbtn' 
            disabled={this.state.options.length===0}
            onClick={this.makedecision}>What Should I do? </button>
            <button className='addbtn' onClick={this.handleRemoveAll}>RemoveAll</button>
           
        </form>
        <ol>
        {this.state.options.map(
          (option)=>{return <li key={option}>{option}</li>}
        )}
        </ol>
      </div>
     
  
      </div>

      </div>
    )
  }
}



 









    
  
  

  