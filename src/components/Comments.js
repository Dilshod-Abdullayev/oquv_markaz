"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
export default function Comments() {
    return (
        <div className='flex flex-col items-center '>
            <h1 className='text-center w-4/5 text-5xl text-slate-700'>What our client’s say</h1>
            <div className='w-3/4 h-96 mt-20 p-12 max-sm:w-full'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper "
                >
                    <SwiperSlide> <div class="mb-12 flex flex-col items-center md:mb-0">
                        <div class="mb-6 flex justify-center">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                        </div>
                        <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
                        <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">
                            Web Developer
                        </h6>
                        <p class="mb-4 min-sm:pb-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div class="mb-12 flex flex-col items-center md:mb-0">
                        <div class="mb-6 flex justify-center">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                        </div>
                        <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
                        <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">
                            Web Developer
                        </h6>
                        <p class="mb-4 pb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div class="mb-12 flex flex-col items-center md:mb-0">
                        <div class="mb-6 flex justify-center">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                        </div>
                        <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
                        <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">
                            Web Developer
                        </h6>
                        <p class="mb-4 pb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide> <div class="mb-12 flex flex-col items-center md:mb-0">
                        <div class="mb-6 flex justify-center">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                        </div>
                        <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
                        <h6 class="mb-4 font-semibold text-primary dark:text-primary-500">
                            Web Developer
                        </h6>
                        <p class="mb-4 pb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                            </svg>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
