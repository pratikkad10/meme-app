import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import useGif from '../hooks/useGif';

function RandomMeme() {

  const {gif,loading, getGif}=useGif();

  return (
    <div 
    className='h-auto w-11/12 mx-auto bg-[rgba(85,124,158,0.51)] border border-black flex items-center justify-center flex-col gap-2 rounded-md'>
       
        <h1 
        className='text-2xl text-center font-semibold '>
        Random Meme</h1>

        <div 
        className='h-[0.8px] w-full bg-gray-700 mt-2'>
        </div>

        {
            loading ? (<Loading/>):(<img src={gif} alt="" className='h-60 w-auto rounded-md' />)
        }

        <div 
        className='h-[0.8px] w-full bg-gray-700 mt-2'>
        </div>

        <button 
        onClick={()=>getGif()}
        className='px-6 py-1 bg-yellow-300 rounded-md my-2'>Generate</button>
    </div>
  )
}

export default RandomMeme