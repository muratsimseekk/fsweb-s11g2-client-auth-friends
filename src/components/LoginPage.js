import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../axiosAuth';
import { useHistory ,Redirect } from 'react-router-dom/';
import { useDispatch, useSelector } from 'react-redux';

function LoginPage() {

    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [error,setError] = useState('')
    const history = useHistory()
    const userData = {
        username:username,
        password:password,
    }

    
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log('submite basildi' ,userData);
        axiosWithAuth()
        .post('http://localhost:9000/api/login' ,userData)
        .then(res => {
            localStorage.setItem('token',res.data.token)
            // dispatch({
            //     type:'SET_TOKEN' ,
            //     payload:res.data.token
            // })
            history.push('/friends')
        }).catch(err => setError('Login is unsuccessful ,try again'))
        
    }

  return (
    <div className='w-screen flex flex-col  items-center  uppercase text-xl'>
        <div className='w-1/4 flex flex-col gap-5 py-3 mt-10  text-black'>
            <div>
            <h1 className='font-extrabold text-5xl'>Login</h1>
            </div>
            <div className='flex flex-col items-start '>
                <label className='font-extrabold'>
                    UserName   
                </label>
                <input type='text' onChange={(e) => setUserName(e.target.value)} className='bg-black text-white font-bold w-full h-14' />
            </div>
            <div className='flex flex-col items-start '>
                <label className='font-extrabold'>
                    password
                </label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} className='bg-black text-white font-bold w-full h-14' />
            </div>
            <div>
                <button onClick={submitHandler} className='bg-black text-white w-full h-14 font-extrabold uppercase' type='submit'>Submit</button>
            </div>
            <p className='text-red-700 font-bold'>{error}</p>
        </div>
    </div>
  )
}

export default LoginPage