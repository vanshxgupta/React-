import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  return (
   <div className='w-full h-screen duration-200'
   style={{background:color}}
   >
    <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
      <div className='flex flex-wrap gap-3 shadow-lg bg-white rounded-xl px-3 py-2 border-solid border-black'>
        <button 
         onClick={()=>setcolor("red")}
        className="outline-none px-4 py-1 rounded-lg  shadow-xl border-solid border-2 border-sky-500"
        style={{backgroundColor:"red"}}>Red</button>
        <button
        onClick={()=>setcolor("green")}
         className="outline-none px-4 py-1 rounded-lg  shadow-xl border-solid border-2 border-sky-500"
        style={{backgroundColor:"green"}}>Green</button>
        <button 
         onClick={()=>setcolor("yellow")}
        className="outline-none px-4 py-1 rounded-lg  shadow-xl border-solid border-2 border-sky-500"
        style={{backgroundColor:"yellow"}}>Yellow</button>
        <button 
         onClick={()=>setcolor("purple")}
        className="outline-none px-4 py-1 rounded-lg  shadow-xl border-solid border-2 border-sky-500"
        style={{backgroundColor:"purple"}}>Purple</button>
        <button
         onClick={()=>setcolor("blue")}
         className="outline-none px-4 py-1 rounded-lg  shadow-xl border-solid border-2 border-sky-500"
        style={{backgroundColor:"blue"}}>Black</button>
        <button 
         onClick={()=>setcolor("white")}
        className="outline-none px-4 py-1 rounded-lg  shadow-xl border-solid border-2 border-sky-500"
        style={{backgroundColor:"white"}}>White</button>
      </div>
    </div>

   </div>
  )
}

export default App
