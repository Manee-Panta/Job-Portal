import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
const Logout = () => {
    const navigate=useNavigate();

    useEffect(()=>{
      localStorage.clear();
      navigate('/')
    })
  
  return (
    <div>
   <h3>logout</h3>
    </div>
  )
}

export default Logout