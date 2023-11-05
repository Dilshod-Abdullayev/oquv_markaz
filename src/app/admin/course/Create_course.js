"use client"
import React, { useState } from 'react';

function Create_course() {
    const [courseclassName, setCourseclassName] = useState('');
    const [description, setDescription] = useState('');
    const [instructorclassName, setInstructorclassName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Create a New Course</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="courseclassName" className="block text-sm font-medium text-gray-700">
                        Course className
                    </label>
                    <input
                        type="text"
                        id="courseclassName"
                        name="courseclassName"
                        value={courseclassName}
                        onChange={(e) => setCourseclassName(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200" />
                </div>
                <div>
                    <label htmlFor="courseclassName" className="block text-sm font-medium text-gray-700">
                        Course tavsifi
                    </label>
                    <input
                        type="text"
                        id="courseclassName"
                        value={courseclassName}
                        onChange={(e) => setCourseclassName(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="currency" className="sr-only">Currency</label>
                                <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option>USD</option>
                                    <option>CAD</option>
                                    <option>EUR</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <select className="select select-accent w-full max-w-xs">
                        <option disabled selected>Qaysi oqituvchi o`tadi</option>
                        <option>Auto</option>
                        <option>Dark mode</option>
                        <option>Light mode</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="instructorclassName" className="block text-sm font-medium text-gray-700">
                        Instructor's className
                    </label>
                    <input
                        type="text"
                        id="instructorclassName"
                        name="instructorclassName"
                        value={instructorclassName}
                        onChange={(e) => setInstructorclassName(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Create Course
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Create_course;
