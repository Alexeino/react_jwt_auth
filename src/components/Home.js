import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [user,setUser] = useState({});

  useEffect(()=>{
    console.log("Home");
    (async () =>{         //a function calling itself asynchronously

      const res = await axios.get('http://127.0.0.1:8000/api/user',{withCredentials:true})
      console.log(res);
    })();
  },[])

  return (
    <main className="container text-center ">
      <div className="starter-template my-5">
        <h4>You are not authenticated!</h4>
      </div>
    </main>
  )
}

export default Home