import React from 'react'
import RandomMeme from './RandomMeme'
import TagMeme from './TagMeme'

function MemeApp() {
  return (
    <div className='flex flex-col justify-center items-center 
    rounded-md  shadow-slate-500 p-12 w-1/2 mx-auto gap-4'>
      <RandomMeme/>

      <TagMeme/>
    </div>
  )
}

export default MemeApp