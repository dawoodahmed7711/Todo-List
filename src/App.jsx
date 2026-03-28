import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [todos , setTodos] = useState([])
  const [show , showDiv] = useState(false)
  const [showP , setP] = useState(true)
  const [showFront , setFront] =useState(true)
  const AddTodo= ()=>{
      if(input.trim() === "") 
     return;
    setTodos([...todos , input])
      setInput("")
      showDiv(true)
      setP(false)
      setFront(false)
  }
  const  del = (index)=>{
    const newTodo = todos.filter((_,i) => i !== index);
    setTodos(newTodo)
    if(newTodo.length === 0) {
      showDiv(false)
      setP(true)
      setFront(true)
    }
    
  }  
  return (
    <>
    
    <div className='heading'>
    <h1>Focus<span>Tasks</span></h1>
    <p>You're all caught  up!✨ </p>
    </div>

    <div class="input-box">
  <input type="text"
   placeholder="Enter text..." 
   spellCheck="false"
   value={input}
   onChange={(e)=>setInput(e.target.value)}
   onKeyDown={(e)=>{
    if(e.key === "Enter") {
      AddTodo()
    }
   }}
   />
  <button class="add-btn"
  onClick={AddTodo}>+</button>
  </div>

 {showFront && (   <div class="card">
  <button class="icon">
    <i class="fa-solid fa-bolt"></i>
  </button>

  <h2>Your day is a blank canvas</h2>

  <p>
    Add a tasks above to start <br/>
    organizing your focus
  </p>
</div>)}
 {show &&   (<div className='upper'>
  <ul> {todos.map((todo , index)=>
    ( <li key={index}>{todo}
    <button onClick={()=>del(index)} className='remove'><i class="fa-solid fa-trash"></i></button></li>
      ))}
  </ul>
</div>)}
{showP && (<p className='end'>Press <span>Enter</span> to add task.</p>)}
    </>
  )
}

export default App
