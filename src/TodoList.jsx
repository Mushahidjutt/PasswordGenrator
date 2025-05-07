import React from 'react'
import TodoMenu from './components/TodoMenu'

const TodoList = () => {
  return (
    <div className='App h-screen bg-gradient-to-r from-purple-400 via-pink-300'>
        <h1 className='text-violet-800 pt-4 font-bold text-3xl'>  Todo List  </h1>
        <TodoMenu/>

        
    </div>
    
  )
}

export default TodoList