import React,{ useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Github() {
     const data=useLoaderData();
    // const {username="vanshxgupta"}=useParams();
    // const[data,setdata]=useState([]);

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${username}`)
    // .then(response=>response.json()).then(data=>{
    //     console.log(data);
    //     setdata(data)
    // })
    // },[])

  return (

    <div className='bg-slate-950 text-white p-4 m-4 shadow-md rounded-sm text-pretty '>
    <h2 className='text-4xl '> GitHub Profile: {data.login}</h2>
    <img src={data.avatar_url} alt="Profile Avatar" className="w-20 h-20 rounded-full shadow-md border-2 border-white" />
    <p className='text-xl'>Followers: {data.followers}</p>
    <p className='text-xl '>Location: {data.location || "Not specified"}</p>
    <p className='text-xl '>Public Repos: {data.public_repos}</p>
  </div>

  )

}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}