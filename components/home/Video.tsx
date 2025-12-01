"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
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
          src={"/images/video/video-section.png"}
          alt="Bg Image "
        />

        {/* Centered text */}

        <div className="max-w-[1640px] mx-auto px-8  w-full  py-10 lg:py-20 ">
          <div className="relative">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Video play */}
              <div className="relative w-full flex justify-center items-center">
                <Link
                  href="#"
                  className="relative w-16 lg:w-24 h-16 lg:h-24 flex justify-center items-center"
                >
                  <span className="absolute inset-0 rounded-full bg-[#BA8E2D] animate-ping-strong"></span>
                  <span className="absolute inset-0 rounded-full bg-[#BA8E2D]"></span>
                  <FaPlay size={30} color="#fff" className="relative z-10" />
                </Link>
              </div>

              <div className="flex flex-col gap-4 max-w-3xl w-full  bg-[#BA8E2D] p-10 rounded-md">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-start leading-snug md:leading-tight ">
                  We’re here to defend your rights and help you resolve your
                  legal issues the right way.
                </h1>
                <p className="text-base font-normal text-white text-start leading-snug md:leading-tight ">
                  Clients often come to me during some of the hardest moments of
                  their lives. I focus on listening, understanding what they’re
                  facing, and giving them clear guidance they can trust. Every
                  case deserves careful preparation and honest communication. No
                  one should face a legal problem alone, and my commitment is to
                  stand with my clients and work toward the strongest outcome
                  possible.
                </p>
                <div className="mt-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white text-start leading-snug md:leading-tight">
                    Est. By <br /> Drew McCulloch, Esq.
                  </h3>
                  <p className="text-base font-normal text-white text-start leading-snug md:leading-tight mt-3">
                    Personal Injury Attorney / Criminal Defense Attorney
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
