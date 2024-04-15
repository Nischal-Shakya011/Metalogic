// import React from "react";
// import serv from '../assets/services.svg'
// import Image from "next/image";
// import computer from '../assets/computer.svg'
// import { MdArrowOutward } from "react-icons/md";

// export default function Services(){

//     return(
//         <>
//         <div className="container flex gap-36 mt-20 ">
//             <div className="w-1/2 grid gap-4 ser-one">
//                <p className="text-lg font-bold text-red-600">OUR SERVICES</p> 
//                <p className="text-primary text-6xl font-bold">Your Need Our Expertise</p>
//                <p className="w- text-gray-600 text-lg">Elevate your business with our comprehensive suite of services. 
//                 From cutting-edge mobile and web development to meticulous QA testing
//                  and proactive maintenance, we bring innovation, quality, and 
//                  reliability to every project</p>
//             </div>
//             <div className="w-1/2 imag">
//                 <Image src={serv} alt="" width={400} height={400}></Image>
//             </div>
//         </div>

//         <div className=" container grid grid-cols-3 justify-around">
//             <div className="flex gap-6 p-6 pr-1 pt-1 w-80 border shadow-xl rounded-lg">
//                 <span className="bg-blue-300 p-2 rounded-2xl"><Image src={computer} width={40} height={40}></Image></span>
//                 <span className="text-base font-bold text-left">Customer Software Development</span> 
//                 <span className=""><MdArrowOutward className=" text-2xl font-semibold"/></span>
//                 </div>
//             <div>kljasdfa;lsf</div>
//             <div>kja;kl\sdj</div>
//             <div>kjaskfl</div>
//             <div>ljaskfl</div>
//             <div>klajkf</div>
//             <div>lkajs;dfl</div>
//             <div>kajklfkljalds</div>
//             <div>lajkd</div>
//         </div>
//         </>
//     )
// }
import React from "react";
import Navigation from '../components/Navigation'
export default function Home(){

  return(
    <>
    <div>
      <Navigation/>
    </div>
    </>

  )
}
