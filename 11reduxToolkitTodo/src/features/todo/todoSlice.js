import {createSlice,nanoid} from '@reduxjs/toolkit';
//createSlice ek function hai jo ek object return karta hai
//object mai 2 chize hoti hai -> name and reducers

//nanoid ek unique id generate krta hai


const initialState={
    todos:[{
        id:1,
        text:"Hello World"
    }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{//2 chize leta hai hmesha
            const todo={
                id:nanoid(),
                text:action.payload //payload se data lelo
            }
        
        state.todos.push(todo)
        },

        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id!=action.payload))
        }

    }


})

//exporting the functionality
export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer