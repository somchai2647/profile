import React from 'react'
import Nav from './Nav'
import { FaLongArrowAltDown } from 'react-icons/fa'
import imgHeader from '../assets/img/desktop/image-header.jpg'

function Header({ title }) {
  return (
    <div className='h-[43rem] bg-gradient-to-r from-sky-500 to-indigo-500 bg-cover bg-center border text-center'
      style={{ backgroundImage: `url(${imgHeader})` }}>
      <Nav />
      <h1 className='text-7xl text-white uppercase bg-slate-500 p-10'>{title}<br />
        <span className='text-2xl'>รหัสนักศึกษา 6506021421072</span></h1>

      <div className='flex justify-center mt-[50px]'>
        <FaLongArrowAltDown className='text-white text-8xl' />
      </div>
    </div>
  )
}

export default Header