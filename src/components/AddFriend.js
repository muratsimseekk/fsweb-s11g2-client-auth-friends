import React from 'react'

function AddFriend() {
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
            <input type='text' className='bg-black text-white font-bold w-full h-14' />
        </div>
        <div className='flex flex-col items-start '>
            <label className='font-extrabold'>
                friend email
            </label>
            <input type='password'  className='bg-black text-white font-bold w-full h-14' />
        </div>
        <div>
            <button className='bg-black text-white w-full h-14 font-extrabold uppercase' type='submit'>Submit</button>
        </div>
    </div>
</div>
  )
}

export default AddFriend