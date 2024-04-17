import React from 'react';
import {useRef } from 'react';
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
import bonus from '../assets/bonus.svg'
import health from '../assets/health.svg'
import paidleave from '../assets/paidleave.svg'
import learning from '../assets/learning.svg'
import food from '../assets/food.svg'
import teambuilding from '../assets/teambuilding.svg'
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { motion, useInView, useAnimation } from "framer-motion"
import Footer from '@/components/Footer';


export default function Career() {
    const [activePage, setActivePage] = useState('Career');
    const [menuOpen, setMenuOpen] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const isInView1 = useInView(ref1, {once: true});
    const isInView2 = useInView(ref2, {once: true});
    const isInView3 = useInView(ref3, {once: true});
    const isInView4 = useInView(ref4, {once: true});
    const isInView5 = useInView(ref5, {once: true});
    const isInView6 = useInView(ref6, {once: true});
    const isInView7 = useInView(ref7, {once: true});
    const mainControls1 = useAnimation();
    const mainControls2 = useAnimation();
    const mainControls3 = useAnimation();
    const mainControls4 = useAnimation();
    const mainControls5 = useAnimation();
    const mainControls6 = useAnimation();
    const mainControls7 = useAnimation();

    useEffect(()=>{
if(isInView1){
    mainControls1.start('visible')
    // console.log(isInView);
}
    },[isInView1])

    useEffect(()=>{
        if(isInView2){
            mainControls2.start('visible')
            // console.log(isInView);
        }
            },[isInView2])

            useEffect(()=>{
                if(isInView3){
                    mainControls3.start('visible')
                    // console.log(isInView);
                }
                    },[isInView3])

                    useEffect(()=>{
                        if(isInView4){
                            mainControls4.start('visible')
                            // console.log(isInView);
                        }
                            },[isInView4])

                            useEffect(()=>{
                                if(isInView5){
                                    mainControls5.start('visible')
                                    // console.log(isInView);
                                }
                                    },[isInView5])

                                    useEffect(()=>{
                                        if(isInView6){
                                            mainControls6.start('visible')
                                            // console.log(isInView);
                                        }
                                            },[isInView6])

                                            useEffect(()=>{
                                                if(isInView7){
                                                    mainControls7.start('visible')
                                                    // console.log(isInView);
                                                }
                                                    },[isInView7])

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
        <div >
        
        <div className=' flex flex-col gap-10 text-center rocket py-20'>
            <div className='text-2xl font-semibold'>Careers</div>
            <div className='font-bold text-6xl'>Navigate Your Next <br /><span className='text-green-700'>Career</span> Move</div>
            <div className='text-slate-800 text-base'>We're continiously searching for the<br /> right talent. Check if you're a good<br /> match.</div>
            <div className='text-center'>
            <button className='bg-primary text-white py-2 px-6 rounded-lg'>Explore Opportunities</button>
            </div>
        </div>

        <div className='bg-[#f5f5f5] text-center pt-24'>
         <div >
<motion.div
ref={ref1}
    variants={{
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0},
    }}
    initial= "hidden"
    animate={mainControls1}
    // animate= "visible"
    transition={{duration: 0.5, delay: 0.25}}
    >  
<div className={`flex flex-col gap-5`}>
    <h5 className='text-2xl font-semibold text-red-600'>Values</h5>
    <h2 className='text-primary text-4xl font-bold'>We Believe in</h2>
    <p className='text-slate-700 text-base'>We believe in creating an environment where individuals can thrive and make a<br /> meaningful impact.</p>
</div>
 </motion.div>
</div>
 <motion.div
ref={ref2}
    variants={{
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0},
    }}
    initial= "hidden"
    animate={mainControls2}
    // animate= "visible"
    transition={{duration: 0.5, delay: 0.25}}
    > 
<div className='grid grid-cols-3 gap-6 believe py-8'>

<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hoverValues'>
    <div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={continious} width={30} height={30} className={'rot'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Continious Learning</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We invest in our team's growth through ongoing training, mentorship,
         and opportunities to expand your skill set.
         We're dedicated to your professional development journey.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hoverValues'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={teamwork} width={30} height={30} className={'rot'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Team Work</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We believe that best solutions comes from diverse perspective and collaborative efforts.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hoverValues'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={innovation} width={30} height={30} className={'rot'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Innovation</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Whether it's the quality of our work, the impact we make, or the relationships we build,
     we consistently strive for the highest standards.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hoverValues'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={mentorship} width={30} height={30} className={'rot'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Mentorship</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We embrace change, learn from challenges, and remain resilient in the face of obstacles,
     always seeking opportunities for improvement.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hoverValues'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={impact} width={30} height={30} className={'rot'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Tangible Impact</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We're committed to delivering solutions that not only meet but exceed their expectations.</p>
</div>
<div className='bg-white shadow-lg p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hoverValues'>
<div className='p-4 bg-gray-200 w-fit rounded-xl'><Image src={adaptability} width={30} height={30} className={'rot'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Adaptability</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Thrive in a fast-paced world with resilience as your ally, valuing and cultivating
     adaptability in your career journey</p>
</div>
</div>
</motion.div>
<div className='bg-white py-20'>
<div className='container '>

    <div ref={ref3}>
<motion.div
    variants={{
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0},
    }}
    initial= "hidden"
    animate={mainControls3}
    // animate= "visible"
    transition={{duration: 0.5, delay: 0.28}}
    >
        <div  className={`flex flex-col gap-5`}>
    <h5 className='text-2xl font-semibold text-red-600'>Benefits</h5>
    <h2 className='text-primary text-4xl font-bold'>Life At Metalogic</h2>
</div>
</motion.div></div>

<motion.div
ref={ref4}
    variants={{
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0},
    }}
    initial= "hidden"
    animate={mainControls4}
    // animate= "visible"
    transition={{duration: 0.5, delay: 0.25}}
    > 
<div className='grid grid-cols-4 gap-4 py-8'>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg hoverBenefits'>
<div><Image src={flexible} width={40} height={40} className={'scaleImg'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Flexibility at work</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Do your best work at a time and place that fits us and your work-life balance.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg hoverBenefits'>
<div><Image src={ownership} width={40} height={40} className={'scaleImg'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Take Ownership</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Take responsibility to solve customer challenges by acting as your own boss.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg hoverBenefits'>
<div><Image src={growth} width={40} height={40} className={'scaleImg'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Unlimited Growth</h3>
    <p className='text-gray-600 space-y-0 text-sm'>With no inner circle… absolutely everyone has the same opportunity to thrive.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg hoverBenefits'>
<div><Image src={heard} width={40} height={40} className={'scaleImg'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Make Yourself Heard</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We encourage diverse perspectives - making it count in achieving our collective goals.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg hoverBenefits'>
<div><Image src={teamspirit} width={40} height={40} className={'scaleImg'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Team Spirit</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Come together, work as one – this is at the heart of how we work, achieve results and collaborate.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg hoverBenefits'>
<div><Image src={inclusivity} width={40} height={40} className={'scaleImg'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Inclusivity at Work</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We believe that everyone is entitled to equal opportunities to learn, lead, and grow in all directions</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg hoverBenefits'>
<div><Image src={transparent} width={40} height={40} className={'scaleImg'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Transparent Environment</h3>
    <p className='text-gray-600 space-y-0 text-sm'>Build confidence in a culture of trust and open communication - with each other and our clients.</p>
</div>
<div className='bg-white  p-6 w-full h-70 rounded-3xl flex flex-col gap-4 text-left hover:border hover:shadow-lg hoverBenefits'>
<div><Image src={fulepassion} width={40} height={40} className={'scaleImg'}></Image></div>
    <h3 className='text-xl font-bold text-primary'>Fuel Your Passion</h3>
    <p className='text-gray-600 space-y-0 text-sm'>We encourage you to strive, push the limits and achieve your dreams by being best you can be.</p>
</div>

</div>
</motion.div>
</div>
</div>


<div className='bg-[#ffffe1] py-24'>
<motion.div
ref={ref5}
    variants={{
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0},
    }}
    initial= "hidden"
    animate={mainControls5}
    // animate= "visible"
    transition={{duration: 0.5, delay: 0.25}}
    > 
<div className='container flex gap-44'>

    <div className='w-1/4 text-left flex flex-col gap-5 pl-8'>
    <h3 className='text-2xl font-bold text-primary'>Metalogic Cares For You</h3>
    <p className='text-gray-600 space-y-0 text-base'>We're less about valuing perks and more about valuing people. Our employee benefits are
     built around enhancing your wellbeing - at work and at home</p>
    </div>

    <div className='w-2/4 grid grid-cols-3 gap-4 text-center'>

    <div className='bg-white  py-12 px-8 rounded-3xl flex flex-col gap-4 text-left border shadow-lg rotateHover'>
    <Image src={bonus} width={40} height={40} className={`rotateImage`}></Image>
    <h3 className='text-primary text-xl font-semibold'>Performance Bonus</h3>
    </div>
    <div className='bg-white  py-12 px-8 rounded-3xl flex flex-col gap-4 text-left border shadow-lg rotateHover' >
    <Image src={health} width={40} height={40} className={`rotateImage`}></Image>
    <h3 className='text-primary text-xl font-semibold'>Health Benefits</h3>
    </div>
    <div className='bg-white  py-12 px-8 rounded-3xl flex flex-col gap-4 text-left border shadow-lg rotateHover'>
    <Image src={paidleave} width={40} height={40} className={`rotateImage`}></Image>
    <h3 className='text-primary text-xl font-semibold'>Paid Leave Policy</h3>
    </div>
    <div className='bg-white  py-12 px-8 rounded-3xl flex flex-col gap-4 text-left border shadow-lg rotateHover' >
    <Image src={learning} width={40} height={40} className={`rotateImage`}></Image>
    <h3 className='text-primary text-xl font-semibold'>Learning And Development</h3>
    </div>
    <div className='bg-white  py-12 px-8 rounded-3xl flex flex-col gap-4 text-left border shadow-lg rotateHover' >
    <Image src={food} width={40} height={40} className={`rotateImage`}></Image>
    <h3 className='text-primary text-xl font-semibold'>Food Credit</h3>
    </div>
    <div className='bg-white  py-12 px-8 rounded-3xl flex flex-col gap-4 text-left border shadow-lg rotateHover' >
    <Image src={teambuilding} width={40} height={40} className={`rotateImage`}></Image>
    <h3 className='text-primary text-xl font-semibold'>Team Activities</h3>
    </div>
    
    </div>
</div>
</motion.div>
</div>

<div className='bg-white py-28'>
<motion.div
ref={ref7}
    variants={{
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0},
    }}
    initial= "hidden"
    animate={mainControls7}
    // animate= "visible"
    transition={{duration: 0.5, delay: 0.25}}
    > 
    <div className={`flex flex-col gap-5`}>
    <h5 className='text-2xl font-semibold text-yellow-600'>Opportunities</h5>
    <h2 className='text-primary text-4xl font-bold'>Available Vacancies</h2>

    <form action="">
        <div className='flex justify-center'>
        <div className='w-[50%]'>
        <input type="text" className='border border-gray-200 p-2 w-full rounded-lg' placeholder='Job Title/Keyword' /><br /><br />
<div className='flex gap-3'><select name="level" id="level" className='border border-gray-200 w-[90%]  p-2 rounded-lg outline-none'>
<option value="">Internships</option>
<option value="">Junior Level</option>
<option value="">Mid Level</option>
<option value="">Senior</option>
        </select>
        <button className='bg-red-600 px-6 rounded-lg'><CiSearch className='text-white text-2xl font-bold'/></button></div>
        </div>
        </div>
    </form>
</div>
</motion.div>
<div className='flex justify-center py-24'>
<div className='w-[50%] text-left'>
    <h3 className='text-xl font-semibold'>2 Job Offers</h3>
    <div className='flex justify-between mt-5 py-2 px-1 border-b border-[#bdbbbb] hover:bg-slate-100' >
        <div> <span className='font-bold'> Frontend Intern (MERN Stack)</span> <br />
<span className='text-blue-600'>(219 applicants )</span></div>
        <div>Full Time</div>
        <div>Lalitpur, Kathmandu</div>
        <div><button className='bg-red-300 rounded-3xl py-1 px-4'>closed</button></div>
    </div>
   
</div>
</div>
    </div></div>
<div className='bg-[#cec6c6] flex justify-center py-24'>
    <div className='w-[50%] flex flex-col gap-8'>
    <p className='text-xl font-semibold'>Subscribe to our News Letters</p>
    <p className='text- text-[#666262]'>Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
    <form action="">
        <div className='flex gap-4 justify-center'>
        <input type="text" className='bg-white p-3 w-[70%] rounded-lg shadow-lg'placeholder='Please Enter Your Email'/>
        <button className='px-6 py-3 bg-red-500 text-white rounded-xl font-semibold'><CiMail className='inline text-white font- text-2xl' />  Subscribe</button>
        </div>
        
    </form>
</div>
</div>

</div>

<Footer/>
        </>
    }

        </>
    )
    
}
