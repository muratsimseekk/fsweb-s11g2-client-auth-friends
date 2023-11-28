import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../axiosAuth'
import { useSelector } from 'react-redux'

function FriendsList() {

    const [list , setlist] = useState([])

    
    useEffect(()=>{
        axiosWithAuth().get('http://localhost:9000/api/friends').then(res => {
        setlist(res.data);
        console.log(res.data);
    })
    }, [])
    


  return (
    <div className='flex flex-col gap-3 mt-10'>
        <div>
            <h1 className='uppercase font-black text-7xl'>Friend List</h1>
        </div>
        <div className='flex flex-col gap-6 '>
            {list.map((item , i) => (
            <h3 key={i} className='uppercase font-bold text-xl'>- {item.name} - {item.email}</h3>
            ))}
        </div>
    </div>
  )
}

export default FriendsList