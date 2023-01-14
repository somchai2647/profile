import React from 'react'
import Swiper from './Swiper';


function SectionTwo({ imgStandOut, eng = "", thai, faculty, link, potition }) {

  if (potition === "left") {
    return (
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className="left flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
          <div>
            <h3 className='text-5xl my-[2rem]' >{eng.toUpperCase()}</h3>
            <p className='text-gray-500 mb-5 text-2xl'>{thai}</p>
            <p className='text-gray-500 mb-5 text-lg'>{faculty}</p>
            <a href={link} target={'_blank'} className='border-b-4 border-b-orange-500'>Learn More</a>
          </div>
        </div>
        <div className="right row-start-2 row-end-3 p-10 bg-gray-200">
          <img className='w-full' src={imgStandOut} alt="stand out" />
        </div>

      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className="left row-start-2 row-end-3 p-10 bg-gray-200">
        <img className='w-full' src={imgStandOut} alt="stand out" />
      </div>
      <div className="right flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
        <div>
          <h3 className='text-5xl my-[2rem]' >{eng.toUpperCase()}</h3>
          <p className='text-gray-500 mb-5 text-2xl'>{thai}</p>
          <p className='text-gray-500 mb-5 text-lg'>{faculty}</p>
          <a href={link} target={'_blank'} className='border-b-4 border-b-orange-500'>Learn More</a>
        </div>
      </div>
    </div>
  )


}

export function SectionTwo2({ imgStandOut, eng = "", thai, faculty, link, potition }) {

  if (potition === "left") {
    return (
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className="left flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
          <div>
            <h3 className='text-5xl my-[2rem]' >{eng.toUpperCase()}</h3>
            <p className='text-gray-500 mb-5 text-2xl'>{thai}</p>
            <p className='text-gray-500 mb-5 text-lg'>{faculty}</p>
            <a href={link} className='border-b-4 border-b-orange-500'>Learn More</a>
          </div>
        </div>
        <div className="right row-start-2 row-end-3 p-10 bg-gray-200">
          <div className="w-full">
            <Swiper images={imgStandOut} />
          </div>
        </div>

      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className="left row-start-2 row-end-3 p-10 bg-gray-200">
        <Swiper images={imgStandOut} />
      </div>
      <div className="right flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
        <div>
          <h3 className='text-5xl my-[2rem]' >{eng.toUpperCase()}</h3>
          <p className='text-gray-500 mb-5 text-2xl'>{thai}</p>
          <p className='text-gray-500 mb-5 text-lg'>{faculty}</p>
          <a href={link} className='border-b-4 border-b-orange-500'>Learn More</a>
        </div>
      </div>
    </div>
  )


}

export default SectionTwo