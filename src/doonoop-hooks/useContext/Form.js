import React,{useState,useContext} from "react";
import NotesContext from './context';

const Form=()=>{
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("")
    const {dispatch}=useContext(NotesContext)

    const addNote=(e)=>{
        e.preventDefault();
        // title && body && setNotes([...notes, { title,body } ])
        dispatch({type:'ADD_NOTE',title,body})
        setTitle("");
        setBody("");
    }


    return(
        <form
        className='container'
        onSubmit={addNote}
        >
        <input 
          className='myinput'
          type="text" 
          value={title}
          onChange={
              (e)=>{setTitle(e.target.value)}
          }/>
        <textarea
          className='text'
          value={body}
          onChange={(e)=>setBody(e.target.value)}>
        </textarea>
        <button
        className="addbtn"
        >Add Note</button>
      </form>
    )
}

export default Form;