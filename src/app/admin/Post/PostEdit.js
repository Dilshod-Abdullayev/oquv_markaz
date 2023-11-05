import React from 'react'
import Posts_full from './Posts_full'

export default function PostEdit() {
    return (
        <div className='flex flex-col items-center w-full'>
            <h1 className='text-3xl text-slate-700 font-extrabold p-4'>Hamma postlar</h1>
            <div className='w-full '>
                <div className='flex bg-slate-100 text-xl p-4 font-bold justify-around'>
                    <h1>Post title</h1>
                    <h1>Post category</h1>
                    <h1>Post description</h1>
                    <h1>Post sanasi</h1>
                    <h1>Edit</h1>
                </div>
            </div>
            <Posts_full />
        </div>
    )
}
