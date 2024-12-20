import { useState } from 'react'
import './App.css'
import Card from './components.jsx/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={
    name:"vansh",
    age:20
  }

   let newarr=[1,2,3,4];

  return (

   <>
   <h1 className='bg-green-200 text-black mb-4 rounded-md'>Tailwind Test</h1>

    <Card username="vansh" btnText="click me"/>
    <Card  username="hitesh" />
  
   </>

  )
}

export default App
