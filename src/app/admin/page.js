import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
export default function page() {
    return (
        <div className='flex mt-16'>
            <Sidebar />
            <Content />
        </div>
    )
}
