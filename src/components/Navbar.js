import React from 'react'
import { useHistory } from 'react-router-dom';


function Navbar() {

    const history = useHistory();

    const logOutHandler = () => {
        localStorage.removeItem('token');
        history.push('/')
    }
  return (
    <div className='w-screen flex flex-col gap-20 items-center  uppercase text-xl'>
        <div className='flex w-2/3 justify-between mt-24 items-baseline border-b-2 border-black'>
            <h1 className='font-bold tracking-wider'>Friends database</h1>
            <ul className='flex gap-6 mb-3'>
                <li className='p-3 bg-black text-white'> <a href='/'> LOGIN.</a></li>
                <li className='p-3 bg-black text-white'> <a href='/friends'>FRIENDLIST.</a></li>
                <li className='p-3 bg-black text-white'> <a href='/add'>ADDFRIEND.</a></li>
                <button onClick={logOutHandler} className='p-3 bg-black text-white'> LOGOUT</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar