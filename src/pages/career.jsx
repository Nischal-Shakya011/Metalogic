import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
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
import flexible from '../assets/flexible.svg'
import ownership from '../assets/ownership.svg'
import growth from '../assets/growth.svg'
import heard from '../assets/heard.svg'
import teamspirit from '../assets/teamspirit.svg'
import inclusivity from '../assets/inclusivity.svg'
import transparent from '../assets/transparent.svg'
import fulepassion from '../assets/fulepassion.svg'



export default function Navigation() {
    const [activePage, setActivePage] = useState('Career');
    const [menuOpen, setMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const totalHeight = document.documentElement.scrollHeight;

            if (totalHeight - (scrollTop + windowHeight) < 100) { // Adjust this value to control when the animation triggers
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
                            <Link href="#" className="hover-underline-red" onClick={() => {
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
                            <Link href="#" className="hover-underline-red" onClick={() => setActivePage('Blogs')}>Blogs</Link>
                        </li>
                        <li className={`nav transition-all duration-200 ease-linear ${activePage === 'About' ? 'active' : ''}`}>
                            <Link href="#" className="hover-underline-red" onClick={() => setActivePage('About')} >About Us</Link>
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

<div className={`flex flex-col gap-5`}>
    <h5 className='text-2xl font-semibold text-red-600'>Values</h5>
    <h2 className='text-primary text-4xl font-bold'>We Believe in</h2>
    <p className='text-slate-700 text-base'>We believe in creating an environment where individuals can thrive and make a<br /> meaningful impact.</p>
</div>
<div className='grid grid-cols-3 gap-6 believe py-8'>

<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
    <div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={continious} width={30} height={30}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Continious Learning</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We invest in our team's growth through ongoing training, mentorship,
         and opportunities to expand your skill set.
         We're dedicated to your professional development journey.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={teamwork} width={30} height={30}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Team Work</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We believe that best solutions comes from diverse perspective and collaborative efforts.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={innovation} width={30} height={30}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Innovation</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Whether it's the quality of our work, the impact we make, or the relationships we build,
     we consistently strive for the highest standards.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={mentorship} width={30} height={30}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Mentorship</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We embrace change, learn from challenges, and remain resilient in the face of obstacles,
     always seeking opportunities for improvement.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={impact} width={30} height={30}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Tangible Impact</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We're committed to delivering solutions that not only meet but exceed their expectations.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={adaptability} width={30} height={30}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Adaptability</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Thrive in a fast-paced world with resilience as your ally, valuing and cultivating
     adaptability in your career journey</p>
</div>
</div>
<div className='bg-white py-20'>
<div className='container '>
<div className={`flex flex-col gap-5`}>
    <h5 className='text-2xl font-semibold text-red-600'>Benefits</h5>
    <h2 className='text-primary text-4xl font-bold'>Life At Metalogic</h2>
</div>
<div className='grid grid-cols-4 gap-4 py-8'>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg '>
<div><Image src={flexible} width={40} height={40}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Flexibility at work</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Do your best work at a time and place that fits us and your work-life balance.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg '>
<div><Image src={ownership} width={40} height={40}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Take Ownership</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Take responsibility to solve customer challenges by acting as your own boss.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg '>
<div><Image src={growth} width={40} height={40}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Unlimited Growth</h3>
    <p className='text-gray-600 space-y-0 text-sm'>With no inner circle… absolutely everyone has the same opportunity to thrive.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg '>
<div><Image src={heard} width={40} height={40}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Make Yourself Heard</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We encourage diverse perspectives - making it count in achieving our collective goals.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg '>
<div><Image src={teamspirit} width={40} height={40}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Team Spirit</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Come together, work as one – this is at the heart of how we work, achieve results and collaborate.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg '>
<div><Image src={inclusivity} width={40} height={40}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Inclusivity at Work</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg '>
<div><Image src={transparent} width={40} height={40}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Transparent Environment</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Build confidence in a culture of trust and open communication - with each other and our clients.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg '>
<div><Image src={fulepassion} width={40} height={40}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Fuel Your Passion</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We encourage you to strive, push the limits and achieve your dreams by being best you can be.</p>
</div>

</div>
</div>
</div>
</div>
        </>
    }

        </>
    )
    
}
