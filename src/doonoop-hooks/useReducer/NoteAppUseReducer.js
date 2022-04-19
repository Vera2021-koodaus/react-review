import React,{useReducer,useEffect} from 'react';
import NotesReducer from './reducer';
import NoteList from './NoteList';
import Form from './Form';

const NoteAppUseReducer=()=>{
    // const [notes,setNotes]=useState([])
    const [notes,dispatch]=useReducer(NotesReducer,[]);
      // 1.给已有的useEffect添加依赖
    useEffect(
    ()=>{ 
        const notes= JSON.parse(localStorage.getItem('notes'));
        if(notes){
        dispatch({type:'POPULATE_NOTES', notes})}
    },[])
    // 2.调用第二个useEffect只运行一遍，从localStorage读取数据。
    useEffect( ()=>{localStorage.setItem("notes", JSON.stringify(notes))
    console.log("useEffect is called")
    },[notes] )

    
    const handleRemove=(title)=>{
        //   setNotes(
        //     notes.filter(note=>note.title !==title)
        //   )
        dispatch({type:'REMOVE_NOTE', title})
        }
     
    return(
        <div>
            <h1>UseReducer</h1>
            <NoteList notes={notes} handleRemove={handleRemove}/>
            <Form dispatch={dispatch}/>
        </div>
    )
}


  
export default NoteAppUseReducer;