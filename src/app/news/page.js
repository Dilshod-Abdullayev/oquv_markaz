"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/news')
            .then(res => setNews(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='flex mt-20 justify-around flex-wrap'>
            {news.map((item) => (
                <div key={item._id} className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                    <a>
                        <img className="rounded-t-lg" src={`http://localhost:5000/uploads/DSC00398.JPG`} alt="Rasm yoq" />
                    </a>
                    <div className="p-5">
                        <a href="">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{item.title}</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3">{item.shortInfo}</p>
                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                            Read more
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
