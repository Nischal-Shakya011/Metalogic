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


export default function Footer(){

    return(
        <>
        <div className="bg-primary py-16">
            <div className="container flex gap-20">
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
<div className="flex gap-14">
<div className="text-white flex flex-col gap-1">
    <h3 className="font-semibold">Company</h3>
    <ul className="text-sm">
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Partnership</a></li>
        <li><a href="#">Terms and Conditions</a></li>
    </ul>
</div>
<div className="text-white flex flex-col gap-1">
    <h3 className="font-semibold">Services</h3>
    <ul className="text-sm">
        <li><a href="#">Custom Software Development</a></li>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">Mobile Web Development</a></li>
        <li><a href="#">Cloud Computing Service</a></li>
        <li><a href="#">Quality Assurance and Testing</a></li>
        <li><a href="#">UI/UX Designing</a></li>
        <li><a href="#">Maintenance and Support</a></li>
        <li><a href="#">Dev Ops</a></li>
        <li><a href="#">Blockchain Solutions</a></li>
    </ul>
</div>
<div className="text-white flex flex-col gap-1">
    <h3 className="font-semibold">Join</h3>
    <ul className="text-sm">
        <li><a href="#">Careers at MetaLogic</a></li>
        <li><a href="#">Internships</a></li>
    </ul>
</div>
<div className="text-white flex flex-col gap-1">
    <h3 className="font-semibold">Join us on Social Medias</h3>
    <ul className="flex gap-3">
    <li className="text-4xl font-bold"><a href="#"><FaWhatsapp className="inline text-white" /></a></li>
    <li className="text-4xl font-bold"><a href="#"><CiFacebook className="inline text-white" /></a></li>
        <li className="text-4xl font-bold"><a href="#"><FaInstagram className="inline text-white" /></a></li>
        <li className="text-4xl font-bold"><a href="#"><CiLinkedin className="inline text-white" /></a></li>

    </ul>
</div>
</div>
            </div>

            <div className="container text-white font-semibold pt-16"><MdCopyright className="inline" /> Copyright 2024 MetaLogic. All rights reserved.</div>

        </div>
        </>
    )
}