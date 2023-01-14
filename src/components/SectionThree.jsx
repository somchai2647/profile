import React from 'react'
import imgGraphicDesign from '../assets/img/desktop/image-graphic-design.jpg'
import imgPhotography from '../assets/img/desktop/image-photography.jpg'

function SectionThree() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 h-[700px]'>
            <div className="left flex  justify-center items-center p-[2rem] lg:px-[13rem] lg:pb-[3rem] text-center bg-cover"
                style={{ backgroundImage: `url(${imgGraphicDesign})` }}>
                <div>
                    <h3 className='text-5xl text-white mb-4 drop-shadow-md'>Website Assignment</h3>


                    <div className="w-full text-sm font-medium text-gray-900 backdrop-blur-sm bg-white/30 rounded-lg border border-gray-200">

                        <a href="#" className="block py-2 px-4 text-lg w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            งานชิ้นที่ 1 -
                        </a>
                        <a href="#" className="block py-2 px-4 text-lg w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            งานชิ้นที่ 2 -
                        </a>
                        <a href="#" className="block py-2 px-4 text-lg w-full rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            งานชิ้นที่ 3 -
                        </a>
                    </div>
                </div>
            </div>
            <div className="right flex justify-center items-center p-[2rem] lg:px-[13rem] lg:pb-[3rem] text-center bg-cover"
                style={{ backgroundImage: `url(${imgPhotography})` }}>
                <div>
                    <h3 className='text-5xl text-white mb-4 drop-shadow-md'>Basic Computer Assignment</h3>


                    <div className="w-full text-sm font-medium text-stone-100 backdrop-blur-sm bg-white/30 rounded-lg border border-gray-400">

                        <a href="#" className="block py-2 px-4 text-lg w-full border-b border-gray-400 cursor-pointer hover:bg-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            งานชิ้นที่ 1 -
                        </a>
                        <a href="#" className="block py-2 px-4 text-lg w-full border-b border-gray-400 cursor-pointer hover:bg-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            งานชิ้นที่ 2 -
                        </a>
                        <a href="#" className="block py-2 px-4 text-lg w-full rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            งานชิ้นที่ 3 -
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree