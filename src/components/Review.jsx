import React from 'react'
import imgEmily from '../assets/img/2210153.png'
import imgThosmas from '../assets/img/flat-network-engineer-icon-vector-37996608.jpg'
import imgJennie from '../assets/img/istockphoto-485422630-170667a.jpg'

const usersData = [
    {
        img: imgEmily,
        content: 'HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, C/C++, C#, Java, PHP, SQL, NoSQL, NodeJS',
        name: 'Programming',
        position: 'Primary Skills'     
    },
    {
        img: imgThosmas,
        content: 'VM Ware, Cisco Packet Tracer, GNS3, Linux Server, Windows Server, RJ45, Switch Managed, Router, Firewall',
        name: 'Networking',
        position: 'Secondary Skills'     
    },
    {
        img: imgJennie,
        content: 'Microsoft Office, Research, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe Animate, Adobe XD',
        name: 'Office & Creative',
        position: 'Sub Skills'     
    }
]

function Review() {
  return (
    <div className='text-center py-[10rem] px-[5rem]'>
         <h3 className='text-5xl my-[2rem]' >My SKILLS</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[5rem]'>
            {usersData.map((data, key) => (
                <div key={key.name} className="py-[5rem]">
                    <img src={data.img} className="inline-block rounded-full w-40 drop-shadow-md" alt={data.name} />
                    <p className='py-[5rem] text-lg'>{data.content}</p>
                    <h4 className='font-bold text-lg'>{data.name}</h4>
                    <p className='text-slate-400'>{data.position}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Review