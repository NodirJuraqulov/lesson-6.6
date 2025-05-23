import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

  return (
    <div className='text-center'>
        <h2 className='text-8xl text-red-600 mt-20'>404</h2>
        <p className='text-red-600'>Something went wrong :) "ERROR"</p>
        <button className='py-2 px-14 cursor-pointer rounded-md bg-slate-700 text-white mt-5 hover:bg-slate-900 transition' onClick={() => navigate("/")}>Go home</button>
        <img className='block mx-auto h-[400px]' src="https://uzmovi.tv/images/notfound.gif" alt="" /> 
    </div>
  )
}

export default React.memo(NotFound)