import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import metaLogo from '../assets/metalogo.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import continious from '../assets/continious_learning.svg'
import impact from '../assets/impact.svg'
import innovation from '../assets/innovation.svg'
import mentorship from '../assets/mentorship.svg'
import teamwork from '../assets/team_work.svg'
import adaptability from '../assets/adaptability.svg'


export default function Navigation() {
    const [activePage, setActivePage] = useState('Career');
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        {/* bg-[${bgc}] */}
        
        <nav className={`navigation bg-[#b4b2b2] border-b border-[#d1c8c8] outline-none p-3 flex ${menuOpen? 'open':''}`}>
            <div className={`container flex justify-between`}>
                <span className={`logo ${menuOpen? 'open':''}`}><a href="/" className='flex gap-3'>
                    <Image src={metaLogo} alt="" width={50} height={50}></Image>
                <span className='text-primary font-semibold text-3xl align-middle pt-2'>MetaLogic</span></a>
                </span>
                <span className={`flex gap-56 items ${menuOpen? 'open':''}`}>
                <ul className={`text-primary flex gap-7 pt-3 text-lg font-semibold menu-items ${menuOpen? 'open':''}`}>
                
                 <li className={`nav transition-all duration-200 ease-linear ${activePage === 'Home' ? 'active' : ''}`}>
                            <Link href="/" className="hover-underline-red" onClick={() => setActivePage('Home')}>Home</Link>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'Services' ? 'active' : ''}`}>
                            <Link href="/services" className="hover-underline-red" onClick={() => {
                                setActivePage('Services');
                                }}>Services</Link>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'Career' ? 'active' : ''}`}>
                            <Link href="/career" className="hover-underline-red" onClick={() => {
                                setActivePage('Career')
                                setMenuOpen(false)
                                }}>Career</Link>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'Blogs' ? 'active' : ''}`}>
                            <Link href="/blogs" className="hover-underline-red" onClick={() => setActivePage('Blogs')}>Blogs</Link>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'About' ? 'active' : ''}`}>
                            <Link href="/about" className="hover-underline-red" onClick={() => setActivePage('About')} >About Us</Link>
                        </li>
                        </ul>
                        
                        <ul className={`pt-1 menu-items ${menuOpen? 'open':''}`}>
                <li className='text-white text-base font-medium bg-red-600 py-2 px-4 rounded-md touch'> <Link href="#">Get in Touch</Link></li>
                </ul>
                </span>
                </div>

                <div className={`menu-icon  pt-2 ${menuOpen? 'open':''} cursor-pointer`} onClick={handleMenuToggle}><IoMdMenu className='inline text-red-600 font-bold text-4xl' /></div>
                <div className={`menu-close  pt-2 ${menuOpen? 'open':''} cursor-pointer`} onClick={handleMenuToggle}><IoMdClose className='inline text-black font-bold text-4xl' /></div>
        </nav>
        {!menuOpen
        &&
        <>
        <div className=' flex flex-col gap-10 text-center rocket py-20'>
            <div className='text-2xl font-semibold'>Careers</div>
            <div className='font-bold text-6xl'>Navigate Your Next <br /><span className='text-green-700'>Career</span> Move</div>
            <div className='text-slate-800 text-base'>We're continiously searching for the<br /> right talent. Check if you're a good<br /> match.</div>
            <div className='text-center'>
            <button className='bg-primary text-white py-2 px-6 rounded-lg'>Explore Opportunities</button>
            </div>
        </div>

        <div className='bg-[#f5f5f5] text-center py-24'>

<div className='flex flex-col gap-5'>
    <h5 className='text-2xl font-semibold text-red-600'>Values</h5>
    <h2 className='text-primary text-4xl font-bold'>We Believe in</h2>
    <p className='text-slate-700 text-base'>We believe in creating an environment where individuals can thrive and make a<br /> meaningful impact.</p>
</div>
<div className='grid grid-cols-3 gap-6 believe py-8'>

<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
    <Image src={continious} width={50} height={50}></Image>
    <h3 className='text-xl font-bold text-primary'>Continious Learning</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We invest in our team's growth through ongoing training, mentorship,
         and opportunities to expand your skill set.
         We're dedicated to your professional development journey.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
    <Image src={teamwork} width={50} height={50}></Image>
    <h3 className='text-xl font-bold text-primary'>Team Work</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We believe that best solutions comes from diverse perspective and collaborative efforts.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
    <Image src={innovation} width={50} height={50}></Image>
    <h3 className='text-xl font-bold text-primary'>Innovation</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Whether it's the quality of our work, the impact we make, or the relationships we build,
     we consistently strive for the highest standards.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
    <Image src={mentorship} width={50} height={50}></Image>
    <h3 className='text-xl font-bold text-primary'>Mentorship</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We embrace change, learn from challenges, and remain resilient in the face of obstacles,
     always seeking opportunities for improvement.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
    <Image src={impact} width={50} height={50}></Image>
    <h3 className='text-xl font-bold text-primary'>Tangible Impact</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We're committed to delivering solutions that not only meet but exceed their expectations.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
    <Image src={adaptability} width={50} height={50}></Image>
    <h3 className='text-xl font-bold text-primary'>Adaptability</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Thrive in a fast-paced world with resilience as your ally, valuing and cultivating
     adaptability in your career journey</p>
</div>



</div>
        </div>
        </>
    }

        </>
    )
    ;
}
