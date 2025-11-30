"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePersonalInjury } from "react-icons/md";

const HeroSection = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitleOne((prev) => !prev);
    }, 3000); // Switch titles every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <div className="relative w-full  flex items-center justify-center">
        <Image
          className="absolute inset-0 object-center object-fill  bg-bottom w-full h-full"
          width={1920}
          height={700}
          src={"/images/hero/hero-bg.png"}
          alt="Bg Image "
        />

        {/* Centered text */}

        <div className="max-w-[1640px] mx-auto px-8  w-full  pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">
            <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="flex flex-col gap-4 max-w-2xl w-full mb-14 lg:mb-20 xl:mb-24">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-start leading-snug md:leading-tight max-w-lg">
                  Injured? Arrested? We can help.
                </h1>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white text-start leading-snug md:leading-tight">
                  Trusted & Experienced Legal Representation Across Tampa Bay
                </h3>
                <p className="text-base font-normal text-white text-start leading-snug md:leading-tight max-w-lg">
                  Justice starts with a lawyer who listens, understands, and
                  fights relentlessly for your rights.
                </p>
                <div>
                  <Link
                    href=""
                    className="px-6 py-4 bg-[#BA8E2D] text-white inline-flex items-center gap-2 rounded-sm hover:bg-yellow-700 mt-4 "
                  >
                    Schedule A Consultation <IoIosArrowForward />
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/hero/Attorney.png"
                  alt="Attorney "
                  width={400}
                  height={500}
                  className="mx-auto"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1640px] mx-auto px-8  w-full  pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 absolute md:bottom-[-20%]  ">
              <div className="p-6 bg-white  rounded-md space-y-2 shadow-[0px_10px_20px_rgba(0,0,0,0.1)]">
                <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center   text-white text-4xl ">
                  <MdOutlinePersonalInjury />
                </div>
                <h4 className="text-lg md:text-xl  font-semibold pt-2">
                  Proven Results & Experience
                </h4>
                <p className="text-base  font-normal text-[#666666] ">
                  Over 15 years of success in personal injury and criminal
                  defense across Tampa Bay.
                </p>
              </div>
              <div className="p-6 bg-white  rounded-md space-y-2 shadow-[0px_10px_20px_rgba(0,0,0,0.1)]">
                <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center   text-white text-4xl ">
                  <MdOutlinePersonalInjury />
                </div>
                <h4 className="text-lg md:text-xl  font-semibold pt-2">
                  Proven Results & Experience
                </h4>
                <p className="text-base  font-normal text-[#666666] ">
                  Over 15 years of success in personal injury and criminal
                  defense across Tampa Bay.
                </p>
              </div>
              <div className="p-6 bg-white  rounded-md space-y-2 shadow-[0px_10px_20px_rgba(0,0,0,0.1)]">
                <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center   text-white text-4xl shadow-[0px_10px_20px_rgba(0,0,0,0.2)]">
                  <MdOutlinePersonalInjury />
                </div>
                <h4 className="text-lg md:text-xl  font-semibold pt-2">
                  Proven Results & Experience
                </h4>
                <p className="text-base  font-normal text-[#666666] ">
                  Over 15 years of success in personal injury and criminal
                  defense across Tampa Bay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
