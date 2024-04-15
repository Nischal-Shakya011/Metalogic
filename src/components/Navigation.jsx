import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import metaLogo from '../assets/metalogo.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';


export default function Navigation() {
    const [activePage, setActivePage] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
        {/* bg-[${bgc}] */}
        <nav className={`navigation bg-primary p-3 flex ${menuOpen? 'open':''}`}>
            <div className={`container flex justify-between`}>
                <span className={`logo ${menuOpen? 'open':''}`}><a href="/" className='flex gap-3'>
                    <Image src={metaLogo} alt="" width={50} height={50}></Image>
                <span className='text-white font-semibold text-3xl align-middle pt-2'>MetaLogic</span></a>
                </span>
                <span className={`flex gap-56 items ${menuOpen? 'open':''}`}>
                <ul className={`text-white flex gap-7 pt-3 text-lg font-semibold menu-items ${menuOpen? 'open':''}`}>
                
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
        </>
    )
    ;
}

