"use client"
import axios from 'axios'
import React, { useState } from 'react'
export default function CreatePost() {
    const [title, setTitle] = useState('')
    const [shortInfo, setShortInfo] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const addPost = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('shortInfo', shortInfo);
        formData.append('description', description);
        formData.append('image', selectedFile); // 'image' should match your server's expected field name

        axios.post('http://localhost:5000/admin', formData)
            .then(result => {
                console.log(result);
                setTitle('');
                setShortInfo('');
                setDescription('');
                setSelectedFile(null); // Clear the selected file
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='flex w-full h-96'>
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
            <form encType="multipart/form-data" className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} name='title' type="text" />
                <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" name='shortInfo' value={shortInfo} onChange={(e) => setShortInfo(e.target.value)} placeholder="Short info" type="text" />
                <input className="description bg-gray-100 sec p-3 h-32 border border-gray-300 outline-none" spellCheck="false" name={description} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe everything about this post here" />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload multiple files</label>
                <input
                    type="file"
                    id="fileInput"
                    name="image"  // Make sure this matches the field name on the server
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <div className="buttons flex">
                    <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                    <button onClick={addPost} type='button' className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</button>
                </div>
            </form>
        </div>
    )
}