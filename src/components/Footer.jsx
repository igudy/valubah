import React from "react";
import Instagram from "../assets/ig.png";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0C450C] text-white mt- [-1rem] font-montserrat">
        <div className="flex justify-between align-center gap-10 px-24 py-20">
          <div className="ml-[2rem]">
            <p className="font-extrabold mb-2">Company</p>
            <div className="text-gray-300 flex flex-col gap-1">
              <p>About</p>
              <p>Why Choose Us</p>
              <p>Pricing</p>
              <p>Testimonial</p>
            </div>
          </div>
          <div>
            <p className="font-extrabold mb-2">Resources</p>
            <div className="text-gray-300 flex flex-col gap-1">
              <p>Privacy Policy</p>
              <p>Terms and Condition</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div>
            <p className="font-extrabold mb-2">Product</p>
            <div className="text-gray-300 flex flex-col gap-1">
              <p>Micro Pension Scheme</p>
              <p>Frequently Asked Questions</p>
            </div>
          </div>
          <div>
            <p className="font-extrabold text-4xl mb-5">Valubah</p>
            <p className="mb-6">Subscribe to our Newsletter</p>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-[3rem] bg-[#2B2E3C]  text-grayy-300 p-2 hover:border-none focus:border-none active:border-none"
              />
              <span className="bg-[#FBCBC9] p-3 font-medium text-gray-700 rounded-sm">
                Get Started
              </span>
            </div>
          </div>
          <div></div>
        </div>

        {/* Social media section */}
        <div className="mx-20 flex gap-4 mt-3">
          <div className="w-[35%] h-[0.5px] bg-white"></div>
          <div className="mb-6 mt-[-2rem]">
            <div className="pt-5 gap-2 flex">
              Copyright Valubah 2023
              <img src={Facebook} className="footer-icon" />
              <img src={Twitter} className="footer-icon" />
              <img src={Instagram} className="footer-icon" />
              <img src={Linkedin} className="footer-icon" />
            </div>
          </div>
          <div className="w-[35%] h-[0.5px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
