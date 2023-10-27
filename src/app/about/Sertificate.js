import React from 'react';

export default function Sertificate() {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-around items-center'>
      <div className='w-full lg:w-1/2 p-6 lg:p-12'>
        <h1 className='text-2xl lg:text-4xl font-semibold text-slate-800'>
          Biz bilan siz <span className='font-extrabold text-blue-500 underline'>sertifikat</span>li ham bo`lasiz
        </h1>
        <p className='text-slate-500 mt-4 lg:mt-12 font-normal text-base lg:text-2xl'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem qui suscipit repellat tenetur debitis modi, quod minima sit doloribus dolor.
        </p>
      </div>
      <img
        className='w-full lg:w-1/2 h-60 lg:h-96 hover:opacity-90 rounded-3xl'
        src='https://psddesain.com/wp-content/uploads/2019/12/Sertifikat-cantik-dari-Microsoft.png'
      />
    </div>
  );
}
