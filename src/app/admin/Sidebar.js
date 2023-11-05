import React from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdCreateNewFolder } from 'react-icons/md'
import { GiTeacher } from 'react-icons/gi'
import { IoIosCreate } from 'react-icons/io'
import { BsFillPatchPlusFill } from 'react-icons/bs'
export default function Sidebar() {
    return (
        <div className='flex p-4 w-72 rounded bg-slate-900 h-screen flex-col pt-4'>
            <div>
                <h1 className='text-3xl flex items-center italic text-white'><FaChalkboardTeacher />Course</h1>
                <ul>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer'>Jami kurslar</li>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer flex items-center'><BsFillPatchPlusFill />Kurs yaratish</li>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer flex items-center'><IoIosCreate />Kurs tahrirlash</li>
                </ul>
            </div>
            <div>
                <h1 className='text-3xl flex items-center italic text-white'><MdCreateNewFolder />Blogs</h1>
                <ul>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer'>Postlar </li>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer flex items-center'><BsFillPatchPlusFill />Post yaratish</li>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer flex items-center'><IoIosCreate />Postlarni tahrirlash</li>
                </ul>
            </div>
            <div>
                <h1 className='text-3xl text-white flex '><GiTeacher />Teacher</h1>
                <ul>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer'>User page</li>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer'>User page</li>
                    <li className='text-xl text-slate-500 font-medium p-1 cursor-pointer'>User page</li>
                </ul>
            </div>
        </div>
    )
}
