import React from 'react'

export default function Nums_section() {
    return (
        <div className='flex text-white justify-around flex-wrap bg-blue-700 p-4'>
            <div className='w-64 border-r mt-3'>
                <h1 className='text-3xl font-extrabold text-white'>3000</h1>
                <p>o`qib bitkazganlar</p>
            </div>
            <div className='w-64 border-r mt-3'>
                <h1 className='text-3xl font-extrabold text-white'>700</h1>
                <p>tahsil olayotganlar</p>
            </div>
            <div className='w-64 border-r mt-3'>
                <h1 className='text-3xl font-extrabold text-white'>5000</h1>
                <p>soatli darslar</p>
            </div>
            <div className='w-64 mt-3' >
                <h1 className='text-3xl font-extrabold text-white'>100+</h1>
                <p>Tajribali ustozlar</p>
            </div>
        </div>
    )
}