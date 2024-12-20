import { useState } from 'react'

import './App.css'



function App() {
//usestate, useeffect, ye sab hooks hai  
  const [counter,setCounter]=useState(15);//const [state, setState] = useState(initialState);
  
  //let counter=15;

  const addValue=()=>{
    if(counter<200){
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);

    } 

  }
  
  const removevalue=()=>{
    if(counter>0){
    setCounter(counter-1);//double click
    }

  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onDoubleClick={removevalue}>Remove Value {counter}</button>
      <p>footer:{counter}</p>

    </>
  )
}

export default App
