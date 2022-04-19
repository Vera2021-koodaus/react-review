import React,{useContext} from 'react';
import NotesContext from './context';
import Note from './Note';
import { nanoid } from 'nanoid';

const NoteList=()=>{
    const {notes} = useContext(NotesContext)        
    return(
        <>
            <h1>Notes</h1>
            {
            notes && notes.map(
                    note=>{return <Note key={note.id=nanoid()} note={note}/>}
            )
            }
        </>
    )
}

export default NoteList;