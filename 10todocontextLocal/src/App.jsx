import { useState ,useEffect} from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/Todoitem'

function App() {
  
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{//naye todos add krne ke liye
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])//...prev se spread kro , aur iske aage todo add krna hai tooh aage likho us todo ki nayi id(date.now() se nayi id mil jayegi har naye todo ko) aur vo baaki todos 
  }

  const updateTodo=(id,todo)=>{//loop maaro , agar id milti hai tooh update krdo array ko , vrna pehle ka hi daaldo
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))

    }
  

  const deleteTodo=(id)=>{//filter ka use karo , easily, jo id delte krna hai , uske alava saare id waale log lelo

    setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
  }

  const toggleComplete=(id)=>{//togglecompleted , vo strike krne aur strike hatane ke liye hai jo todo complete tooh batane ke liye
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))//prevtodo ki saari values lelo spread operator se, aur fir us todo object ki ek value (completed ko overwrite krdo,i.e jo true hai false krdo , false hai true krdo)

  }

  //local storage ->string mai leta hai , string mai deta hai tooh JSon mai chahiye tooh convert krna padega 

  //jab hum load krenge website, tabh local storage se data aana chahiye , jo pehle saved hai website pe , 
  //  tooh uske liye hum useEffect use krenge

  //getitem kro 
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  //jab todos mai kuch changes ho tooh local storage mai set kro setitem se
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos])



  
  return (

    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      {/* {Todoform goes here} */}
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {/* {Loop and Add Todo Item here} */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>

                          </div>

                        ))
                      }
                    </div>
                </div>
            </div>
    </TodoProvider>

  )
}

export default App
