"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slideshow() {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="flex border items-center h-screen w-full justify-center">
                        <div class="max-w-xs">
                            <div class="bg-slate-200 hover:bg-white shadow-xl rounded-lg py-3">
                                <div class="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                                </div>
                                <div class="p-2">
                                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                                    <div class="text-center text-gray-400 text-xs font-semibold">
                                        <p>Web Developer</p>
                                    </div>
                                    <table class="text-xs my-3">
                                        <tbody><tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                        </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td class="px-2 py-2">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td class="px-2 py-2">john@exmaple.com</td>
                                            </tr>
                                        </tbody></table>

                                    <div class="text-center my-3">
                                        <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex items-center h-screen w-full justify-center">

                        <div class="max-w-xs">
                            <div class="bg-slate-200 hover:bg-white shadow-xl rounded-lg py-3">
                                <div class="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                                </div>
                                <div class="p-2">
                                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                                    <div class="text-center text-gray-400 text-xs font-semibold">
                                        <p>Web Developer</p>
                                    </div>
                                    <table class="text-xs my-3">
                                        <tbody><tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                        </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td class="px-2 py-2">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td class="px-2 py-2">john@exmaple.com</td>
                                            </tr>
                                        </tbody></table>

                                    <div class="text-center my-3">
                                        <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex border items-center h-screen w-full justify-center">
                        <div class="max-w-xs">
                            <div class="bg-slate-200 hover:bg-white shadow-xl rounded-lg py-3">
                                <div class="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                                </div>
                                <div class="p-2">
                                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                                    <div class="text-center text-gray-400 text-xs font-semibold">
                                        <p>Web Developer</p>
                                    </div>
                                    <table class="text-xs my-3">
                                        <tbody><tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                        </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td class="px-2 py-2">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td class="px-2 py-2">john@exmaple.com</td>
                                            </tr>
                                        </tbody></table>

                                    <div class="text-center my-3">
                                        <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex items-center h-screen w-full justify-center">

                        <div class="max-w-xs">
                            <div class="bg-slate-200 hover:bg-white shadow-xl rounded-lg py-3">
                                <div class="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                                </div>
                                <div class="p-2">
                                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                                    <div class="text-center text-gray-400 text-xs font-semibold">
                                        <p>Web Developer</p>
                                    </div>
                                    <table class="text-xs my-3">
                                        <tbody><tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                        </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td class="px-2 py-2">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td class="px-2 py-2">john@exmaple.com</td>
                                            </tr>
                                        </tbody></table>

                                    <div class="text-center my-3">
                                        <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex border items-center h-screen w-full justify-center">
                        <div class="max-w-xs">
                            <div class="bg-slate-200 hover:bg-white shadow-xl rounded-lg py-3">
                                <div class="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                                </div>
                                <div class="p-2">
                                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                                    <div class="text-center text-gray-400 text-xs font-semibold">
                                        <p>Web Developer</p>
                                    </div>
                                    <table class="text-xs my-3">
                                        <tbody><tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                        </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td class="px-2 py-2">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td class="px-2 py-2">john@exmaple.com</td>
                                            </tr>
                                        </tbody></table>

                                    <div class="text-center my-3">
                                        <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex items-center h-screen w-full justify-center">

                        <div class="max-w-xs">
                            <div class="bg-slate-200 hover:bg-white shadow-xl rounded-lg py-3">
                                <div class="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                                </div>
                                <div class="p-2">
                                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                                    <div class="text-center text-gray-400 text-xs font-semibold">
                                        <p>Web Developer</p>
                                    </div>
                                    <table class="text-xs my-3">
                                        <tbody><tr>
                                            <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                        </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                <td class="px-2 py-2">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td class="px-2 py-2">john@exmaple.com</td>
                                            </tr>
                                        </tbody></table>

                                    <div class="text-center my-3">
                                        <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
               
            </Swiper>

        </div>
    )
}
