import React from 'react';
import SocialVideo from './SocialVideo';

export default function Social() {
    return (
        <div className='mt-8 lg:mt-12 flex flex-col items-center'>
            <h1 className='text-3xl lg:text-4xl'>
                Biz aslida <span className='font-extrabold text-blue-500 underline'>kimmiz</span>
            </h1>
            <iframe
                className='w-full lg:w-1/2 h-60 lg:h-96 rounded-3xl'
                width='1280'
                height='720'
                src='https://www.youtube.com/embed/PkZNo7MFNFg'
                title='Learn JavaScript - Full Course for Beginners'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
            ></iframe>
        </div>
    );
}
