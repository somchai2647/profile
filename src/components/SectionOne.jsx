import React from 'react'
import imgTransform from '../assets/img/desktop/image-transform.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function SectionOne() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className="left flex justify-center items-center p-[5rem]">
        <div>
          <h3 className='text-5xl my-4'>สมชาย บริบูรณ์</h3>
          <p className='text-gray-500 text-2xl mb-4'>👤 ชื่อเล่น: สม</p>
          <p className='text-gray-500 text-2xl mb-4'>📅 วันเกิด 28 เมษายน 2544</p>
          <p className='text-gray-500 text-2xl mb-4'>🎂 อายุ 21 ขวบ</p>
          <p className='text-gray-500 text-2xl mb-4'>🩸 กรุ๊ปเลือด: B</p>
          <p className='text-gray-500 text-2xl mb-4'>🏠 จังหวัดเชียงราย</p>
          <div className='flex gap-10 mt-5'>
            <a href="https://web.facebook.com/somchai2647" target={'_blank'}  ><FaFacebook size={40} className="" /></a>
            <a href="https://www.instagram.com/somchai2647/" target={'_blank'} ><FaInstagram size={40} /></a>
            <a href="https://th.linkedin.com/in/somchai-boriboon/" target={'_blank'} ><FaLinkedin size={40} /></a>
            <a href="https://github.com/somchai2647" target={'_blank'} ><FaGithub size={40} /></a>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='w-full' src={imgTransform} alt="สมชาย บริบูรณ์" />
      </div>
    </div>
  )
}

export default SectionOne