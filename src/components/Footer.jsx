import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Footer() {
  return (
    <footer className='bg-[#458C7E] flex text-center justify-center text-white p-[3rem]'>
      <div>
        <h3 className='font-bold text-3xl'>SOMCHAI BORIBOON</h3>
        <ul className='flex my-[2rem]'>
          <li className='mx-[1rem]'><Link to={`/`}>Home</Link></li>
          <li className='mx-[1rem]'><Link to={`/skills`}>Skills</Link></li>
          <li className='mx-[1rem]'><Link to={`/education`}>Education</Link></li>
          <li className='mx-[1rem]'><Link to={`/internship`}>Internship</Link></li>
          <li className='mx-[1rem]'><Link to={`/certificate`}>Certificate</Link></li>
        </ul>
        <ul className='grid grid-cols-4 place-items-center'>
          <li className='mx-[1rem]'><a target={'_blank'}  href="https://web.facebook.com/somchai2647"><FaFacebook /></a></li>
          <li className='mx-[1rem]'><a target={'_blank'}  href="https://www.instagram.com/somchai2647/"><FaInstagram /></a></li>
          <li className='mx-[1rem]'><a target={'_blank'}  href="https://th.linkedin.com/in/somchai-boriboon/"><FaLinkedin /></a></li>
          <li className='mx-[1rem]'><a target={'_blank'}  href="https://github.com/somchai2647"><FaGithub /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer