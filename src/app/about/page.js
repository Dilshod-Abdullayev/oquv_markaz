import React from 'react'
import photo from '../../image/photo.png'
import Image from 'next/image'

export default function page() {
    return (
        <div className='w-full mt-20 p-4 flex justify-between items-center'>
            <div>
                <h1 className='text-slate-500 text-5xl '>Your pathway to smarter learning</h1>
                <p className='text-2xl text-slate-800 mt-4'>Engage, learn, and grow with our AI Tutor powered by GPT-4, “Edi”</p>
                <button class="bg-blue-500 mt-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Batafsil
                </button>
            </div>
            <Image src={photo} />
        </div >
    )
}
