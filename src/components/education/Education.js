import React from 'react'
import Education_top from './Education_top'
import { AiOutlineUserAdd, AiOutlineFieldTime,AiFillDashboard,AiFillDollarCircle } from 'react-icons/ai'
export default function Education() {
    return (
        <div className='p-4'>
            <Education_top />
            <div className='mt-6 flex  justify-between flex-wrap'>
                <div className='cursor-pointer hover:bg-slate-700 hover:text-white transition-all w-72 p-4 rounded-3xl shadow-2xl h-80 bg-white'>
                    <div className='w-20 h-20 rounded-3xl text-5xl flex justify-center items-center  text-white bg-sky-800'>
                        <AiOutlineUserAdd />
                    </div>
                    <h1 className='text-2xl mt-4'>One on One Monitor</h1>
                    <p className='mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
                <div className='cursor-pointer hover:bg-slate-700 hover:text-white transition-all w-72 p-4 rounded-3xl shadow-2xl h-80 bg-white'>
                    <div className='w-20 h-20 rounded-3xl text-5xl flex justify-center items-center  text-white bg-green-700'>
                        <AiOutlineFieldTime />
                    </div> 
                    <h1 className='text-2xl mt-4'>24/7 Mentor </h1>
                    <p className='mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
                <div className='cursor-pointer hover:bg-slate-700 hover:text-white transition-all w-72 p-4 rounded-3xl shadow-2xl h-80 bg-white'>
                    <div className='w-20 h-20 rounded-3xl text-5xl flex justify-center items-center  text-white bg-red-600'>
                        <AiFillDashboard />
                    </div>
                    <h1 className='text-2xl mt-4'>Whiteboard</h1>
                    <p className='mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
                <div className='cursor-pointer hover:bg-slate-700 hover:text-white transition-all w-72 p-4 rounded-3xl shadow-2xl h-80 bg-white'>
                    <div className='w-20 h-20 rounded-3xl text-5xl flex justify-center items-center  text-white bg-orange-600'>
                        <AiFillDollarCircle />
                    </div>
                    <h1 className='text-2xl mt-4'>Affordable Price</h1>
                    <p className='mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
            </div>
        </div>
    )
}
