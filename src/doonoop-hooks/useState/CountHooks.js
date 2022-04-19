import React,{useState,useEffect} from 'react';

const CountHooks=(props)=>{
    const [count,setCount]=useState(props.count);
    const [text,setText]=useState("");
// 置空数组参数，在读取数据时候有用，因为不想每次读取都更新数据。
    useEffect(
        ()=>{console.log("useeffect is running")},[]
    )
    return<>
            <h1>董师傅Hooks课程</h1>
            <h2>The Current {text || 'Count'} is: {count} </h2>
            <button onClick={()=>{setCount(count+1)}}>+1</button>
            <button onClick={()=>{setCount(count-1)}}>-1</button>
            <button onClick={()=>{setCount(props.count)}}>Reset</button>
            <input value={text} onChange={e=>setText(e.target.value)}/>
         </>

}
CountHooks.defaultProps={
    count:0
}
export default CountHooks;

