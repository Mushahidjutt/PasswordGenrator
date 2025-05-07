import React, { useState } from "react";

const ClickCount = () => {
  const [Count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center font-bold text-3xl">
      <div>
        <h1 className="flex items-center justify-center font-bold text-3xl">
          This Is A Counter Click
        </h1>
        <div className="flex items-center justify-center font-bold text-3xl">
          {" "}
          {Count}
        </div>

        <div className="flex flex-row py-5">
        <button
          className='flex items-center justify-center type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" mx-3 font-bold text-3xl'
          onClick={() => setCount(Count + 1)}
        >
          +Increment
        </button>
        <button
          className='flex items-center justify-center type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          onClick={() => setCount(Count - 1)}
        >
          -Decrement
        </button>

        <button
          className='flex items-center justify-center type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          onClick={() => setCount(0)}
        >
          Reset 
        </button>
        </div>
      </div>
    </div>
  );
};

export default ClickCount;
