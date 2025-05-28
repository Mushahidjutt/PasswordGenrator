import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

function Practicee() {


const [name, setName] = useState('');
  const [age, setAge] = useState(0);
    const [count,setcount] = useState(0);
    const [user,setuser]= useState ([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setuser(data));
  }, []); 


  return (


  

    <div>Counter  {count}

    <ul>{user.map(user=> <li key={user.id}>{user.name}</li>)}</ul>
                  
        <div>  <button onClick={()=>setcount(count+1)}> +</button> </div>
        <div>  <button onClick={()=>setcount(count-1*2)}> -</button> </div>

        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      <input type="number" value={age} onChange={e => setAge(e.target.value)} />

      <h4>Age is :{age} <br></br>  Name is : {name}</h4>

    </div>
    
  )
}

export default Practicee