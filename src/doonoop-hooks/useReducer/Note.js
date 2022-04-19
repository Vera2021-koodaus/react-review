import React from 'react';

const Note=({note, handleRemove})=>{
  
    // useEffect(
    //   ()=>{console.log("setting up development environment")},[]
    // )

    return(
      <div>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
        <button 
        className="addbtn"
        onClick={
          ()=>{handleRemove(note.title)}}
        >Discard</button>      
      </div>
    )
  
  }

export default Note