import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import ReactSwitch from 'react-switch';

const TodoMenu = () => {

  const [task,setTask]= useState('');
  const [list,setList]= useState([]);

  const addTask =()=>{

    if(task){
      const to_do={
        id:list.length+1,
        title:task,
        toggle:false
      }

      setList([to_do, ...list])
      setTask('');
    }
  }

const deleteTask =(id)=>{
  const filtered =list.filter((task)=> task.id !==id)
  setList(filtered)
}

const toggleTask =(id)=>{
  const updateTask =list.map((task)=>
  task.id===id ? {...task,toggle:!task.toggle}:task)
  setList(updateTask)
}

  return (
    <div>
      <div className=' flex justify-center items-center mt-4'>
        <input type="text" placeholder='Enter Task' className='w-[350px] rounded p-2' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button  className='text-2xl bg-blue-600 mx-2 rounded p-2' onClick={addTask}> <IoIosAddCircleOutline /> </button>
      </div>

      <div className='flex  flex-col items-center mt-4 '>
        <div className={`${list.length>0 && 'bg-gradient-to-r from-sky-500 via bg-indigo-100 to-pink-100 pt-2 pl-2 pr-2 rounded w-[400px]'}`}>
          {list.length===0 ? <h1 className='font-bold text-3xl 
          text-purpl-700 p-2'>Add Task </h1> :
          list.map((task)=>(
            <div className={`flex w-[350] text-md font-bold items-center space-x-2 bg-gray-200 p-2 rounded-md mb-2 
              ${task.toggle? 'bg-green-600 text-cyan-400' :'bg-violet-400 rounded'}`}
            key={task.id}>
              <h4 className={`flex-grow ${task.toggle?'line-through':
                ''}`}>
                {task.title} </h4>
                <button className='text-red-600 font-bold text-xl py-1 px-2 rounded' 
                onClick={()=>deleteTask(task.id)}>
                  <MdDelete /></button>
                <ReactSwitch 
                checked={task.toggle}
                height={20}
                width={40}
                handleDiameter={18}
                onColor='#4299e1'
                offColor='#ccc'
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={()=>toggleTask(task.id)}/>
              
            </div>
          )
          )
          }
        </div>
      </div>
    </div>
  )
}

export default TodoMenu