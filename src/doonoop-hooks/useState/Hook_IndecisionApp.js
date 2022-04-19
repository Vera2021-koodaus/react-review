import React,{useState} from 'react';
import { nanoid } from 'nanoid';
import './index.js';

const HoopApp=()=>{
    const [options,setOptions]=useState([]);
    const [option, setOption]=useState("");

    const addOptions=(e)=>{
        e.preventDefault();
        option && setOptions([...options,{option}])
        setOption("")
        
    }
    const handleRemove=(removedOption)=>{
        setOptions(
            options.filter(
                option=>option.option !==removedOption)
        )
    }
    

    return( <>
    <h1>Register Information</h1>
    <form onSubmit={addOptions}>
        <input
        className='myinput'
        value={option}
        onChange={
            (e)=>{e.preventDefault()
                setOption(e.target.value)}
        }
        />
        <button className='addbtn'>Submit</button>
        {
            options.map(
                option=>{return<div  
                className='lists'
                key={nanoid()}>
                    <li key={option.option}>{option.option}</li>
                    <button
                    className='addbtn'
                     onClick={()=>{handleRemove(option.option)}}                           
                    >Dsicard</button>
                </div>
                
               }
            )
        }
    </form>
    </>)

}

export default HoopApp;