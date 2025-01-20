import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import useGif from '../hooks/useGif';

function TagMeme() {


    const [tag, setTag]=useState('car');
    const {gif, loading, getGif}=useGif();
    
  return (
    <div 
    className='h-auto w-11/12 mx-auto bg-[rgba(100,115,147,0.51)] border border-black flex items-center justify-center flex-col gap-2 rounded-md'>
       
        <h1 
        className='text-2xl text-center font-semibold '>
        Random {tag} Meme</h1>

        <div 
        className='h-[0.8px] w-full bg-gray-700 mt-2'>
        </div>

        {
            loading ? (<Loading/>):(<img src={gif} alt="" className='h-60 w-auto' />)
        }

        <div 
        className='h-[0.8px] w-full bg-gray-700 mt-2'>
        </div>

        <input
        onChange={(event)=>setTag(event.target.value)} 
        className='bg-transparent border border-gray-800 rounded-md p-1'
        type="text" name="tag" id="tag" placeholder='' value={tag} />

        <button 
        onClick={()=>getGif(tag)}
        className='px-6 py-1 bg-yellow-300 rounded-md my-2'>Generate</button>
    </div>
  )
}

export default TagMeme