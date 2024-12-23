import React,{useState}from 'react'
import { useTodo } from '../contexts';

function TodoForm() {

    const [todo,settodo]=useState("")
    const {addTodo}=useTodo()//jo humne context banaye the , usse functionality la rahe jo humko chahiye , tooh humko addtodo ki functionality chahiye thi form mai tooh vo le aaye 

    const add=(e)=>{
        e.preventDefault()

        if(!todo){
            return 
        }
        addTodo({todo:todo,completed:false})
        settodo("")
    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e)=>settodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;