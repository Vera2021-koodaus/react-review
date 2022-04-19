import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxClassApp from './Redux/class/Redux-ClassApp';
import {store} from './Redux/class/store/index';
import {Provider} from 'react-redux';


ReactDOM.render(
    <Provider store={store}><ReduxClassApp/></Provider>,document.getElementById('root'))

// ***************************案例一：count状态的改变需要重新调用函数去渲染在页面上
// let count=0;

// const handleAdd=function(){
//   count++
//   App();
// }

// const handleMinus=function(){
//  count--;
//   App();
// }

// const handleReset=function(){
//   count=0;
//   App();
// }


// const App=()=>{
//   const template=(
//     <div>
//     <h1>Count:{count}</h1>
//     <button onClick={handleAdd}>+1</button>
//     <button onClick={handleMinus}>-1</button>
//     <button onClick={handleReset}>Reset</button>
//   </div>
//   );
//   ReactDOM.render(template,document.getElementById('root'))
// }
// App()


//******案例二：三元表达式，逻辑运算符。
// const user={
//   // name:'Zhang San',
//   age:2,
//   location:'New York',
//   title:" This is my header!",
//   subtitle:"This is my JSX",
//   options:[]
// }

// const getLocation=function(location){
//   if(location){
//     return <p>Location:{location}</p>
//   }
// }

// const myapp=(
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {/* 当age存在并且大于18时候才显示。 */}
//     {user.age && (user.age)> 18 && <p>{user.age}</p>}
//     {getLocation(user.location)}
//     {user.subtitle && <p>{user.subtitle}</p>}
//     {user.options.length >0 ? <p>{user.options}</p> : <p>There is no options</p>}
    
//   </div>
// )
// ReactDOM.render(myapp,document.getElementById('root'));


// ***************************案例三：IndecisionApp

// **********************案例四：逻辑运算符，三元表达式，来回切换按钮。
// let visibility=false;

// const handleToggle=()=>{
//     visibility=!visibility;
//     render()
// }

// const render=function(){
//     const jsx=(
//         <div>   
//             <h1>Visibility Toggle</h1>
//             <button 
//             className='addbtn'
//             onClick={handleToggle}>{visibility? 'Hide Details': 'Show Details'}</button>
//             {visibility &&  <p>  // 如果visibility的状态是true就显示标签里的内容。
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//             </p>}
           
//         </div>
//     )
// ReactDOM.render(jsx, document.getElementById('root'))

// }
// render()


// const app={
//     title:'Indecision App',
//     subtitle:'Put Your Life in the Hands of Automation',
//     options:[]
//   }


 
//   const onFormSubmit=(event)=>{
//     event.preventDefault();
//     const inputOption=event.target.elements.option.value;
//     if(inputOption){
//       app.options.push(inputOption);
//       render()
//       event.target.elements.option.value="";
//     }
    
//   }

//   const handleRemoveAll=()=>{
//     app.options=[];
//     render()
  
//   }
//   const makedecision=()=>{
//     const randomNum=Math.floor ((Math.random()* app.options.length)); 
//     const option=app.options[randomNum];
//     alert(option)
//   }
  
// const render=()=>{
//     var template=(
//     <div className="App">
//     <h1>{app.title}</h1>
//       <p>{ (app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
//       <p>{app.options.length}</p>
//       {app.subtitle && <h3>{app.subtitle}</h3>}
//       <div className='mainpart'>
//         <form 
//             className='myform'
//             onSubmit={onFormSubmit}>
//             <input type='text' name='option' className='myinput'/>
//             <button className='addbtn'>Add Option</button>
//             <button className='addbtn' 
//             disabled={app.options.length===0}
//             onClick={makedecision}>What Should I do? </button>
//             <button className='addbtn' onClick={handleRemoveAll}>RemoveAll</button>
           
//         </form>
//         <p>here is the list</p>
//         <ol>
//         {app.options.map(
//           (option)=>{return <li key={option}>{option}</li>}
//         )}
//         </ol>
//       </div>
//   </div>);
    
//     // ReactDOM.render(template,document.getElementById('root'))
    
//   }
// render()