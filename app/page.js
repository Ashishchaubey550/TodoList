"use client"

import React, { useState } from 'react'

const page = () => {
  const [title , setTitle] = useState("");
  const [desc , setDesc] = useState("");
  const sumitHandler=(e)=>{
    e.preventDefault();
    console.log(title);
    console.log(desc)
    setTitle("");
    setDesc("");
  }
  return (
    <>
    <div className=' justify-center items-center'>
        <h1 className=' bg-black text-white text-3xl text-center pt-2 align-baseline font-bold'>
        TodoList
      </h1>
    </div>
    <form onSubmit={sumitHandler}>
      <input  type="text"  placeholder="Enter Title here"
      className=" mx-7 border-orange-400  text-gray-600 text-xl border-s-4 border-t-4  m-4 p-2 pl-4 pr-2" 
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      />

      <input  type="text"  placeholder="Enter Description Here"
      className=" mx-7 border-orange-400  text-gray-600 text-xl border-s-4 border-t-4  m-4 p-2 pl-4 pr-2" 
      value={desc}
      onChange={(m)=>{
        setDesc(m.target.value);
      }}
      />

      <button className=' bg-gray-400 border-black border-2 m-5 py-2 rounded-xl px-6 ml-16 text-xl font-semibold'>Add Task
      </button>

    </form>
    </>


  )
}
export default page
