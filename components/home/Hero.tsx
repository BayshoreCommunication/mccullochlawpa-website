"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { memo, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

const titles = ["Injured?", "Arrested?", "We can help."];

const HeroSection = () => {
  const [showTitleOne, setShowTitleOne] = useState(true);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    // blinking cursor
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    // typing effect
    if (index < titles.length) {
      if (!reverse && subIndex === titles[index].length) {
        setTimeout(() => setReverse(true), 1200);
        return;
      }

      if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % titles.length);
        return;
      }

      const timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        },
        reverse ? 80 : 160
      );

      return () => clearTimeout(timeout);
    }

    return () => clearTimeout(timeout2);
  }, [subIndex, index, reverse]);

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
          className="absolute inset-0 object-center object-cover  bg-bottom w-full h-full"
          width={1920}
          height={700}
          src={"/images/hero/hero-bg.png"}
          alt="Bg Image "
        />

        {/* Centered text */}

        <div className="max-w-[1640px] mx-auto px-8  w-full  pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">
            <div className="w-full flex flex-col-reverse md:flex-row items-start justify-between gap-8">
              <div className="flex flex-col gap-6 max-w-2xl w-full mb-14 lg:mb-20 xl:mb-24">
                <Reveal y={100} opacityFrom={0} duration={3}>
                  {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-start leading-snug md:leading-tight max-w-lg">
                    Injured? Arrested? We can help.
                  </h1> */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug md:leading-tight max-w-lg border-b-3 border-primary inline-block pb-1 ">
                    {titles[index].substring(0, subIndex)}
                    <span
                      className={`${
                        blink ? "opacity-100" : "opacity-0"
                      } transition-opacity`}
                    >
                      |
                    </span>
                  </h1>
                </Reveal>
                <Reveal y={100} opacityFrom={0} duration={2}>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white text-start leading-snug md:leading-tight">
                    Trusted & Experienced Legal Representation Across Tampa Bay
                  </h3>
                </Reveal>

                <Reveal y={100} opacityFrom={0} duration={2}>
                  <p className="text-base font-normal text-white text-start leading-snug md:leading-tight max-w-lg">
                    Justice starts with a lawyer who listens, understands, and
                    fights relentlessly for your rights.
                  </p>
                </Reveal>

                <Reveal y={100} opacityFrom={0} duration={3}>
                  <div>
                    <Link
                      href="/contact"
                      className="px-6 py-4 bg-[#BA8E2D] text-white inline-flex items-center gap-2 rounded-sm hover:bg-yellow-700 mt-4 "
                    >
                      Schedule A Consultation <IoIosArrowForward />
                    </Link>
                  </div>
                </Reveal>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:absolute md:bottom-[-20%]  ">
              <Reveal y={100} opacityFrom={0} duration={4}>
                <div className="p-6 bg-white  rounded-md space-y-2 shadow-[0px_10px_20px_rgba(0,0,0,0.1)] h-auto lg:h-60  ">
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
              </Reveal>

              <Reveal y={100} opacityFrom={0} duration={4}>
                <div className="p-6 bg-white  rounded-md space-y-2 shadow-[0px_10px_20px_rgba(0,0,0,0.1)] h-auto lg:h-60  ">
                  <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center   text-white text-4xl ">
                    <IoGlobeOutline />
                  </div>
                  <h4 className="text-lg md:text-xl  font-semibold pt-2">
                    Personalized Attention
                  </h4>
                  <p className="text-base  font-normal text-[#666666] ">
                    Every client is treated like family with honest, one-on-one
                    guidance.
                  </p>
                </div>
              </Reveal>
              <Reveal y={100} opacityFrom={0} duration={4}>
                <div className="p-6 bg-white  rounded-md space-y-2 shadow-[0px_10px_20px_rgba(0,0,0,0.1)] h-auto lg:h-60  ">
                  <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center   text-white text-4xl ">
                    <PiHandshakeFill />
                  </div>
                  <h4 className="text-lg md:text-xl  font-semibold pt-2">
                    24/7 Availability
                  </h4>
                  <p className="text-base  font-normal text-[#666666] ">
                    We’re here day or night to protect your rights when it
                    matters most.
                  </p>
                </div>
              </Reveal>
              <Reveal y={100} opacityFrom={0} duration={4}>
                <div className="p-6 bg-white  rounded-md space-y-2 shadow-[0px_10px_20px_rgba(0,0,0,0.1)] h-auto lg:h-60  ">
                  <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center   text-white text-4xl ">
                    <FaAward />
                  </div>
                  <h4 className="text-lg md:text-xl  font-semibold pt-2">
                    Award-Winning Team
                  </h4>
                  <p className="text-base  font-normal text-[#666666] ">
                    Recognized by The National Trial Lawyers and Super Lawyers
                    Rising Stars.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
