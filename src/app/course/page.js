import React from 'react'

export default function page() {
    return (
        <div className='mt-20 flex flex-col items-center'>
            <h1 className='text-4xl font-extrabold p-4 text-slate-600' >Bizning kurslarimiz</h1>
            <div className='w-2/5 flex justify-between mt-6'>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dasturlash</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">MEDIA</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SMM</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DESIGN</button>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DESIGN</button>
            </div>
            <div className='mt-12 p-10 flex justify-between w-full flex-wrap'>
                <div class="relative max-w-sm rounded-lg overflow-hidden shadow-lg border-2 transition-transform transform hover:scale-105">
                    <img class="w-full" src="https://velog.velcdn.com/images/ney9083/post/874a4799-24e8-4c1e-a5e7-5cc27f277787/image.png" alt="Course Image" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Kurs nomi</div>
                        <p class="text-gray-700 text-base">Kurs tavsifi</p>
                        <div class="text-xl font-semibold text-blue-600">Narxi: 1,500,000 so'm</div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="text-sm font-semibold text-gray-600">Boshqa malumotlar:</div>
                        <ul class="text-base text-gray-700">
                            <li>Kurs davomiyligi: 12 hafta</li>
                            <li>O'qituvchi: John Doe</li>
                        </ul>
                    </div>
                    <div class="absolute top-0 right-0 m-2 p-2 bg-white rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition duration-300">
                        <i class="fas fa-info-circle"></i>
                    </div>
                </div>
                <div class="relative max-w-sm rounded-lg overflow-hidden shadow-lg border-2 transition-transform transform hover:scale-105">
                    <img class="w-full" src="https://velog.velcdn.com/images/ney9083/post/874a4799-24e8-4c1e-a5e7-5cc27f277787/image.png" alt="Course Image" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Kurs nomi</div>
                        <p class="text-gray-700 text-base">Kurs tavsifi</p>
                        <div class="text-xl font-semibold text-blue-600">Narxi: 1,500,000 so'm</div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="text-sm font-semibold text-gray-600">Boshqa malumotlar:</div>
                        <ul class="text-base text-gray-700">
                            <li>Kurs davomiyligi: 12 hafta</li>
                            <li>O'qituvchi: John Doe</li>
                        </ul>
                    </div>
                    <div class="absolute top-0 right-0 m-2 p-2 bg-white rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition duration-300">
                        <i class="fas fa-info-circle"></i>
                    </div>
                </div>
                <div class="relative max-w-sm rounded-lg overflow-hidden shadow-lg border-2 transition-transform transform hover:scale-105">
                    <img class="w-full" src="https://velog.velcdn.com/images/ney9083/post/874a4799-24e8-4c1e-a5e7-5cc27f277787/image.png" alt="Course Image" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Kurs nomi</div>
                        <p class="text-gray-700 text-base">Kurs tavsifi</p>
                        <div class="text-xl font-semibold text-blue-600">Narxi: 1,500,000 so'm</div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="text-sm font-semibold text-gray-600">Boshqa malumotlar:</div>
                        <ul class="text-base text-gray-700">
                            <li>Kurs davomiyligi: 12 hafta</li>
                            <li>O'qituvchi: John Doe</li>
                        </ul>
                    </div>
                    <div class="absolute top-0 right-0 m-2 p-2 bg-white rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition duration-300">
                        <i class="fas fa-info-circle"></i>
                    </div>
                </div>
            
            </div>

        </div>
    )
}
