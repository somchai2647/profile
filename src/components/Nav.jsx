import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-between px-[10rem] py-[3rem]'>
      <div className="logo">
        <a href="#" className='text-3xl text-white font-bold'>Somchai Boriboon</a>
      </div>
      <ul className="menu flex flex-col md:flex-row lg:flex-row items-center text-white">
        <li className={`mx-[40px] my-[10px] ${path === "" && "flex justify-center items-center bg-white w-[100px] h-[45px] text-black rounded-full"}`}><Link to={"/"}>Home</Link></li>
        <li className={`mx-[40px] my-[10px] ${path === "skills" && "flex justify-center items-center bg-white w-[100px] h-[45px] text-black rounded-full"}`}><Link to={"/skills"}>Skills</Link></li>
        <li className={`mx-[40px] my-[10px] ${path === "education" && "flex justify-center items-center bg-white w-[100px] h-[45px] text-black rounded-full"}`}><Link to={"/education"}>Education</Link></li>
        <li className={`mx-[40px] my-[10px] ${path === "internship" && "flex justify-center items-center bg-white w-[100px] h-[45px] text-black rounded-full"}`}><Link to={"/internship"}>Internship</Link></li>
        <li className={`mx-[40px] my-[10px] ${path === "certificate" && "flex justify-center items-center bg-white w-[100px] h-[45px] text-black rounded-full"}`}><Link to={"/certificate"}>Certificate</Link></li>
      </ul>
    </div>
  )
}

export default Nav