import React from "react";
import metalogo from '../assets/metalogo.png'
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdCopyright } from "react-icons/md";
import Link from "next/link";

export default function Footer(){

    return(
        <>
        <div className="bg-primary py-16"> 
            <div className="container flex flex-col gap-20 lg:flex-row">
<div className="flex gap-3">
    <div><Image src={metalogo} alt='' width={50} height={50}></Image></div>
    <div className="flex flex-col gap-4 text-left text-white">
        <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-3xl">Metalogic</h2>
            <h5>Software Private Limited</h5>
        </div>
        <div className="flex flex-col gap-1">
        <p><CiLocationOn className="inline text-xl" /> Saptakhel, Lalitpur (Head office)</p>
        <p><IoCallOutline className="inline text-xl" /> + 977 9851353599</p>
        <p><CiMail className="inline text-xl" /> info@metalogic.com.np</p>
        </div>
    </div>
</div>
<div className="flex flex-col md:flex-row gap-14">
<div className="text-white flex flex-col gap-1">
    <h3 className="font-semibold">Company</h3>
    <ul className="text-sm">
        <li><Link href="#">Feedback</Link></li>
        <li><Link href="#">Partnership</Link></li>
        <li><Link href="#">Terms and Conditions</Link></li>
    </ul>
</div>
<div className="text-white flex flex-col gap-1">
    <h3 className="font-semibold">Services</h3>
    <ul className="text-sm">
        <li><Link href="#">Custom Software Development</Link></li>
        <li><Link href="#">Web Development</Link></li>
        <li><Link href="#">Mobile Web Development</Link></li>
        <li><Link href="#">Cloud Computing Service</Link></li>
        <li><Link href="#">Quality Assurance and Testing</Link></li>
        <li><Link href="#">UI/UX Designing</Link></li>
        <li><Link href="#">Maintenance and Support</Link></li>
        <li><Link href="#">Dev Ops</Link></li>
        <li><Link href="#">Blockchain Solutions</Link></li>
    </ul>
</div>
<div className="text-white flex flex-col gap-1">
    <h3 className="font-semibold">Join</h3>
    <ul className="text-sm">
        <li><Link href="#">Careers at MetaLogic</Link></li>
        <li><Link href="#">Internships</Link></li>
    </ul>
</div>
<div className="text-white flex flex-col gap-1">
    <h3 className="font-semibold">Join us on Social Medias</h3>
    <ul className="flex gap-3">
    <li className="text-4xl font-bold"><Link href="#"><FaWhatsapp className="inline text-white" /></Link></li>
    <li className="text-4xl font-bold"><Link href="#"><CiFacebook className="inline text-white" /></Link></li>
        <li className="text-4xl font-bold"><Link href="#"><FaInstagram className="inline text-white" /></Link></li>
        <li className="text-4xl font-bold"><Link href="#"><CiLinkedin className="inline text-white" /></Link></li>

    </ul>
</div>
</div>
            </div>

            <div className="container text-white font-semibold pt-16"><MdCopyright className="inline" /> Copyright 2024 MetaLogic. All rights reserved.</div>

        </div>
        </>
    )
}