"use client"
import React, { useState, useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'

export default function Posts_full() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postTitle, setPostTitle] = useState("Post title");
    const [postCategory, setPostCategory] = useState("Post category");
    const [postDescription, setPostDescription] = useState("Post description");
    const [postSanasi, setPostSanasi] = useState("Post sanasi");
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const saveChanges = () => {
        // Ma'lumotlarni saqlash logikasi shu joyda bo'lishi kerak
        // Masalan, ma'lumotlarni serverga yuborish
        closeModal();
    };

    return (
        <div className='flex flex-col w-full'>
            <div className='flex justify-around border-b p-4'>
                <h1 className='font-medium'>{postTitle}</h1>
                <h1 className='font-light'>{postCategory}</h1>
                <h1 className='font-medium'>{postDescription}</h1>
                <h1 className='font-medium'>{postSanasi}</h1>
                <h1 className='font-medium' onClick={openModal}><FiEdit /></h1>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 w-96 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
                        <input
                            type="text"
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            value={postCategory}
                            onChange={(e) => setPostCategory(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded"
                        />
                        <textarea
                            value={postDescription}
                            onChange={(e) => setPostDescription(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            value={postSanasi}
                            onChange={(e) => setPostSanasi(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded"
                        />
                        <button
                            onClick={saveChanges}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Save Changes
                        </button>
                        <button
                            onClick={closeModal}
                            className="ml-2 text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
