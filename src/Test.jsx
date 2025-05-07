import React, { useState } from 'react'

const Test = () => {
    const [Pass,setPass] = useState();

    

   
    function RondomPass(length){
        let result='';
        const alpha="abcdefghigklmnopqrstuvwxyz123456789!@#$%^&*()_+=-";
        for(let i=0;i<length; i++){
            result+=alpha[Math.floor(Math.random()*alpha.length)]
            
        }
        return result;
    }
    

  return (
    <div>
        <div>
            <h1 className="flex items-center justify-center font-bold text-3xl">Check for Passwords </h1>
            <h1 className="flex items-center justify-center font-bold text-3xl">{Pass}</h1>
            <div className='flex items-center justify-center'>
           <button className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
            dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
             onClick={()=>setPass(RondomPass(8))}>Genrator </button>
           </div>
        </div>
    </div>
  )
}

export default Test