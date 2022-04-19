import React, {useEffect, useReducer} from 'react';
import NotesContext from './context';
import NotesReducer from '../useReducer/reducer';
import NoteList from './NoteList';
import Form from './Form';



const NoteAppContext=()=>{
    const [notes,dispatch]=useReducer(NotesReducer,[]);
        useEffect(
        ()=>{ 
            const notes= JSON.parse(localStorage.getItem('notes'));
            if(notes){
            dispatch({type:'POPULATE_NOTES', notes})}
        },[])
        useEffect( ()=>{localStorage.setItem("notes", JSON.stringify(notes))
        console.log("useEffect is called")
        },[notes] )

      

    return(
        <NotesContext.Provider value={{notes,dispatch}}>
            <h1>UseReducer</h1>
            <NoteList/>
            <Form/>
        </NotesContext.Provider>
    )
}

export default NoteAppContext;