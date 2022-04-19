import Note from './Note';
import { nanoid } from 'nanoid';

const NoteList=({notes,handleRemove})=>{
    return(
        <div>
            <h1>Notes</h1>
            {
            notes && notes.map(
                    note=>{return <Note key={note.id=nanoid()} note={note} handleRemove={handleRemove}/>}
            )
            }
        </div>
    )
}

export default NoteList;