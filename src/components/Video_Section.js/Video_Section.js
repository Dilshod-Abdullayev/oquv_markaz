import React from 'react'
import Video_Player from './Video_Player'

export default function Video_Section() {
  return (
    <div className='mt-20 flex justify-between'>
      <Video_Player />
      <div className='flex flex-col items-start w-1/2 py-6'>
        <h1 className='w-11/12 text-gray-900 text-5xl font-extrabold'>We are Always Ensure Best Course for your learning</h1>
        <p className='w-10/12 text-zinc-800 mt-5'>Lorem Ipsum is simply dummy text of the printing and It typesetting industry. Lorem Ipsum has been the  </p>
        <button class="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join Us Free
        </button>
      </div>
    </div>
  )
}
