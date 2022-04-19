import React, {useContext}from 'react';
import NotesContext from './context';
import useMousePosition from '../selfdefinedHooks/useMousePosition'

const Note=({note})=>{
  const {dispatch}=useContext(NotesContext)
  const position=useMousePosition();

  const handleRemove=(title)=>{
    //   setNotes(
    //     notes.filter(note=>note.title !==title)
    //   )
    dispatch({type:'REMOVE_NOTE', title})
    }
  
    // useEffect(
    //   ()=>{console.log("setting up development environment")},[]
    // )

    return(
      <>
        <p>X:{position.x} Y:{position.y}</p>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
        <button 
        className="addbtn"
        onClick={
          ()=>{handleRemove(note.title)}}
        >Discard</button>      
      </>
    )
  
  }

export default Note