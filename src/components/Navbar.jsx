import React, { useState } from "react"
import People from '../assets/people.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (<div className="bg-[#146614] font-montserrat">
    <div className="px-28">

    <div className="w-full pt-6 flex justify-between items-center text-white">
        <div>
          <h1 className="text-[32px] font-extrabold">Valubah</h1>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>About</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li className="bg-[#FBCBC9] p-4 mt-[-15px] font-bold text-black rounded-lg">Get Started</li>
          </ul>
        </div>
    </div>
    
    {/* Write up and image */}
    <div className="py-2 flex text-white">
      <div className="basis-1/2">
        <p className="text-[50px] mt-24 leading-[4rem]
        font-black"><span className="text-[#FBCBC9]"> 
          Valubah: {" "}
        </span>Your 
        Secure Path to a 
      Confident Future</p>
        <p className="mt-10 text-xl">Explore our Comprehensive Financial Support and
        Protection Solutions Tailored for Gig Workers,
            Informal Income Earners, and Businesses.</p>
          <p className="bg-[#FBCBC9] pl-12 py-4 w-[12rem] mt-10 font-bold text-black rounded-lg">Get Started</p>
      </div>
      <div className="basis-1/2">
        <img src={People} className="pl-10 ml-10"/>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Navbar
