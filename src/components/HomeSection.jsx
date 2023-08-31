import React from "react";
import People2 from "../assets/people2.png";
import People3 from "../assets/people3.png";
import People4 from "../assets/people4.png";

const HomeSection = () => {
  return (
    <>
      {/* First Section */}
      <div className="px-[30rem] font-montserrat">
        <div className="flex items-center text-center justify-center">
          <div className="mt-20">
            <p className="text-4xl font-bold">
              Tailored Financial Security for Every Stage
            </p>
            <p className="text-lg mt-6 mb-7">
              Explore our range of comprehensive financial support and
              protection solutions designed for Gig Workers, Informal Income
              Earners, and Businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-28">
        {/* Second Section */}
        <div className="flex mt-20">
          <div className="basis-[55%]">
            <img src={People2} />
          </div>
          <div className="basis-[45%] p-10 mt-[8rem] mr-10">
            <p className="text-2xl font-bold">Pension Plans</p>
            <p className="mt-6">
              Tailored for You Plan for a worry-free retirement with our
              customizable pension options, designed to provide you with
              long-term financial security and peace of mind
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex mt-20">
          <div className="basis-[45%] p-10 mt-[8rem]">
            <p className="text-2xl font-bold">Life Insurance</p>
            <p className="mt-6">
              Life Insurance That Matters Protect your loved ones' futures with
              our reliable life insurance coverage, ensuring financial stability
              even in unforeseen circumstances.
            </p>
          </div>

          <div className="basis-[55%]">
            <img src={People3} />
          </div>
        </div>

        {/* Fourth Section */}
        <div className="flex mt-20">
          <div className="basis-[55%]">
            <img src={People4} />
          </div>
          <div className="basis-[45%] p-10 mt-[8rem]">
            <p className="text-2xl font-bold">Health and Accident Protection</p>
            <p className="mt-6">
              You Can Count On Stay prepared for life's challenges with our
              comprehensive health and accident coverage, offering you the
              support you need when you need it most
            </p>
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="px-[20rem] mt-[5rem]">
        <div className="flex items-center text-center justify-center">
          <div className="pink-div h-[80%] w-[100%] rounded-xl">
            <div className="mt-10">
              <p className="text-4xl font-bold px-[6rem]">
                Join Now to Access Financial Confidence
              </p>
              <p className="mt-6 text-lg px-[14rem]">
                Join Valubah today and take the first step towards securing your
                future..
              </p>
              <div className="flex items-center text-center justify-center">
                <p className="bg-[#146614] py-4 w-[12rem] mt-6 font-bold text-white rounded-lg mb-10">
                  Get Started
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
