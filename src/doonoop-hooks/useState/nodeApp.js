import React,{useState,useEffect} from 'react'; 


const NodeApp=()=>{
    const [notes,setNotes]=useState([]);
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("")

// 1. 从localStorage读取notes数组，如果没有默认为空数组。
// 2. 利用useEffect 当notes变化时候更新localStorage中的notes。
useEffect(
  ()=>{ 
    const notesData= JSON.parse(localStorage.getItem('notes'));
    if(notesData){
      setNotes(notesData)}
},[])
// 2.调用第二个useEffect只运行一遍，从localStorage读取数据。
useEffect( ()=>{localStorage.setItem("notes", JSON.stringify(notes))
  console.log("useEffect is called")
},[notes] )
// 1.给已有的useEffect添加依赖



    const addNote=(e)=>{
        e.preventDefault();
        title && body && setNotes([...notes, { title,body } ])
        setTitle("");
        setBody("")
    }

    const handleRemove=(title)=>{
      setNotes(
        notes.filter(note=>note.title !==title)
      )
    }

    return(
      <div>
        <h1>Notes</h1>
        {
          notes && notes.map(
                  note=>{return <Note key={note.title} note={note} handleRemove={handleRemove}/>}
          )
        }
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
      </div>
    )
}


const Note=({note,handleRemove})=>{

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


export default NodeApp;