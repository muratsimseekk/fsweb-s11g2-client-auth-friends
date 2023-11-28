import React, { useState } from 'react'
import { axiosWithAuth } from '../axiosAuth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AddFriend() {

    // - **[POST]** \* `/api/friends`: Yeni bir karakter ekler.

    const [newName , setNewName] = useState('');
    const [newMail , setNewMail] = useState('');
    const [err,setErr] =useState('')
    const history = useHistory()

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:9000/api/friends',{name:newName , email : newMail})
        .then(resp => {
            console.log('gonderilen data' , newName , newMail);
            history.push('/friends')
        }).catch(err => setErr('Process is unsuccessfull ,try again'))

    }
  return (
    <div className='w-screen flex flex-col  items-center  uppercase text-xl'>
    <div className='w-1/4 flex flex-col gap-5 py-3 mt-10  text-black'>
        <div>
        <h1 className='font-extrabold text-5xl'>add friend</h1>
        </div>
        <div className='flex flex-col items-start '>
            <label className='font-extrabold'>
                friend name   
            </label>
            <input onChange={(e) => setNewName(e.target.value)} type='text' className='bg-black text-white font-bold w-full h-14' />
        </div>
        <div className='flex flex-col items-start '>
            <label className='font-extrabold'>
                friend email
            </label>
            <input onChange={(e) => setNewMail(e.target.value)} type='email'  className='bg-black text-white font-bold w-full h-14' />
        </div>
        <div>
            <button onClick={newSubmitHandler} className='bg-black text-white w-full h-14 font-extrabold uppercase' type='submit'>Submit</button>
        </div>
        <p>{err}</p>
    </div>
</div>
  )
}

export default AddFriend