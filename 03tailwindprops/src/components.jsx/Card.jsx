import React from 'react'

function Card({username,btnText="setting as default"}) {
    console.log(username,btnText)
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
    <img
      src="https://images.unsplash.com/photo-1721332155637-8b339526cf4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        Title
      </span>
      <h2 className="text-xl font-semibold tracking-wide">{username},{btnText}</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p>
    </div>
    )
}

export default Card