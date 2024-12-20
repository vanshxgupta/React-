import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'



function Login() {

    const [username,setusername]=useState('')
    const [password,setPassword]=useState('')

    const {setuser}=useContext(UserContext);

    const handleSubmit=(e)=>{
      e.preventDefault();
      setuser({username,password});

    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        val={username}
        onChange={(e)=>setusername(e.target.value)}
        placeholder='username' />
        {"        "}
        <input type="text" 
        placeholder='password' 
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login