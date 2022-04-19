// localstorage 把数据存储在用户浏览器上，刷新页面时候不丢失数据。
// API 数据是对象键值对形式出现的，setItem 是设置数据 getItem 是读取数据
// localstrorage存储的数据必须是字符串，需将对象转成键值对的字符才能存储
// 读取里面的数据进行更新必须转成对象才能。
import React,{useEffect,useState} from "react"; 
import { nanoid } from "nanoid";


const UseLocalStorage=()=>{
    const [books,setBooks]=useState([]);
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");

   const addbooks=(e)=>{
        e.preventDefault()
        setBooks([...books,{title,author}]);
        setTitle("")
        setAuthor("")
    }



useEffect(
    ()=>{
        const bookData=JSON.parse(localStorage.getItem("books"));
        if(bookData){
            setBooks(bookData)
        }
    },[]
)
useEffect(
    ()=>{localStorage.setItem("books", JSON.stringify(books))},[books]
)
    return(
        <div>
            <h1>Medications</h1>
            {books.map(
                (book)=>{return<NewlyAdded key={nanoid()} {...book}/>}
            )}
            <form onSubmit={addbooks}>
                <input 
                onChange={
                    (e)=>{setTitle(e.target.value)}
                }
                value={title} placeholder="title"/>
                <input 
                onChange={(e)=>{setAuthor(e.target.value)}}
                value={author} placeholder="author"/>
                <button>AddBooks</button>
            </form>
        </div>
    )

}

const NewlyAdded=(book)=>{
    return(
        <div>
            {book.title}{book.author}
        </div>
    )
}



export default UseLocalStorage;