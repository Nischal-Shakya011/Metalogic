import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import metaLogo from '../assets/metalogo.png'

export default function Navigation() {
    const [activePage, setActivePage] = useState('Home');

    return (
        <>
        <nav className='bg-primary p-3'>
            <ul className='container flex justify-between'>
                <span>
                    <li>
                    <a href="/" className='flex gap-3'>
                    <Image src={metaLogo} alt="" width={50} height={50}></Image>
                <span className='text-white font-semibold text-3xl align-middle pt-2'>MetaLogic</span>
                    </a>
                </li>
                </span>
                <span className='text-white flex gap-7 pt-3 text-lg font-semibold'>
                
                 <li className={`nav transition-all duration-200 ease-linear ${activePage === 'Home' ? 'active' : ''}`}>
                            <a href="#" className="hover-underline-red" onClick={() => setActivePage('Home')}>Home</a>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'Services' ? 'active' : ''}`}>
                            <a href="#" className="hover-underline-red" onClick={() => setActivePage('Services')}>Services</a>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'Career' ? 'active' : ''}`}>
                            <a href="#" className="hover-underline-red" onClick={() => setActivePage('Career')}>Career</a>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'Blogs' ? 'active' : ''}`}>
                            <a href="#" className="hover-underline-red" onClick={() => setActivePage('Blogs')}>Blogs</a>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'About' ? 'active' : ''}`}>
                            <a href="#" className="hover-underline-red" onClick={() => setActivePage('About')}>About Us</a>
                        </li>
                </span>
                <span className='pt-3'>
                <li className='text-white text-base font-medium bg-red-600 py-2 px-4 rounded-md'> <a href="#">Get in Touch</a></li>
                </span>
                </ul>
        </nav>
        </>
    )
    ;
}



