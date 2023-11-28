import React from 'react'

function LoginPage() {
  return (
    <div className='w-screen flex flex-col gap-20 items-center  uppercase text-xl'>
        <div className='flex w-2/3 justify-between mt-24 items-baseline border-b-2 border-black'>
            <h1 className='font-bold tracking-wider'>Friends database</h1>
            <ul className='flex gap-6 mb-3'>
                <li className='p-3 bg-black text-white'>LOGIN.</li>
                <li className='p-3 bg-black text-white'>FRIENDLIST.</li>
                <li className='p-3 bg-black text-white'>ADDFRIEND.</li>
                <li className='p-3 bg-black text-white'>LOGOUT</li>
            </ul>
        </div>
        <div className='w-1/4 flex flex-col gap-5 py-3  text-black'>
            <div>
            <h1 className='font-extrabold text-5xl'>Login</h1>
            </div>
            <div className='flex flex-col items-start '>
                <label className='font-extrabold'>
                    UserName   
                </label>
                <input className='bg-black text-white w-full h-14' />
            </div>
            <div className='flex flex-col items-start '>
                <label className='font-extrabold'>
                    password
                </label>
                <input className='bg-black text-white font-bold w-full h-14' />
            </div>
            <div>
                <button className='bg-black text-white w-full h-14 font-extrabold uppercase' type='submit'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage