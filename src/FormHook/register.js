import React from 'react';
import {useForm} from './useForm';
import './App.css';

const Form=()=>{

    const  register=()=>console.log(values)
    
    const [values,handleChange,handleSubmit] = useForm(register);

    // const [username, setUsername]=useState("");
    // const [handle,setHandle]=useState("")

 

    return(
        <form     
        onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type="text"
                name="username"
                value={values.username || ""}
                onChange={handleChange}
            />
            <label>Handle</label>
            <input 
                type="text"
                name="handle"
                value={values.handle || ""}
                onChange={handleChange}
            />
           <button>Submit</button>
        </form>
    )
}

export default Form;
