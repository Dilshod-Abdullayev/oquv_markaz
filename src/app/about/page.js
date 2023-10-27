import photo from '../../image/photo.png'
import React from 'react';
import Galery from './Galery/Galery';
import Slideshow from './Slideshow';
import Sertificate from './Sertificate';
import Social from './Social';

export default function Page() {
    return (
        <div className='container mx-auto p-4'>
            <div className='mt-20 p-4 flex flex-col-reverse lg:flex-row justify-between items-center'>
                <div className='lg:w-1/2'>
                    <h1 className='text-slate-500 text-4xl lg:text-5xl xl:text-6xl'>
                        Your pathway to smarter learning
                    </h1>
                    <p className='text-2xl text-slate-800 mt-4'>
                        Engage, learn, and grow with our AI Tutor powered by GPT-4, “Edi”
                    </p>
                    <button className='bg-blue-500 mt-8 lg:mt-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Batafsil
                    </button>
                </div>
                <div className='lg:w-1/2'>
                    <img src={photo} alt='Your Image' />
                </div>
            </div>
            <Galery />
            <Slideshow />
            <Sertificate />
            <Social />
        </div>
    );
}

