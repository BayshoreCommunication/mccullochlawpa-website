"use client";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SuperRevealRandom from "@/components/motion/SuperRevealRandom";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { PiHandshakeFill } from "react-icons/pi";
import { FaAward } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

const titles = ["Injured?", "Arrested?", "We can help."];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink(prev => !prev), 500);

    if (index < titles.length) {
      if (!reverse && subIndex === titles[index].length) {
        setTimeout(() => setReverse(true), 1200);
        return;
      }
      if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex(prev => (prev + 1) % titles.length);
        return;
      }

      const timeout = setTimeout(
        () => setSubIndex(prev => prev + (reverse ? -1 : 1)),
        reverse ? 80 : 160
      );

      return () => clearTimeout(timeout);
    }

    return () => clearTimeout(timeout2);
  }, [subIndex, index, reverse]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center">
        <Image
          className="absolute inset-0 object-center object-cover bg-bottom w-full h-full"
          width={1920}
          height={700}
          src="/images/hero/hero-bg.png"
          alt="Bg Image"
        />

        <div className="max-w-[1640px] mx-auto px-8 w-full pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">
            <div className="w-full flex flex-col-reverse md:flex-row items-start justify-between gap-8">
              {/* Text */}
              <div className="flex flex-col gap-6 max-w-2xl w-full mb-14 lg:mb-20 xl:mb-24">
                <Reveal y={100} opacityFrom={0} duration={3}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug md:leading-tight max-w-lg border-b-3 border-primary inline-block pb-1">
                    {titles[index].substring(0, subIndex)}
                    <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
                  </h1>
                </Reveal>

                <SuperRevealRandom duration={2}>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-snug md:leading-tight">
                    Trusted & Experienced Legal Representation Across Tampa Bay
                  </h3>
                </SuperRevealRandom>

                <Reveal y={100} opacityFrom={0} duration={2}>
                  <p className="text-base font-normal text-white leading-snug md:leading-tight max-w-lg">
                    Justice starts with a lawyer who listens, understands, and fights relentlessly for your rights.
                  </p>
                </Reveal>

                <Reveal y={100} opacityFrom={0} duration={3}>
                  <Link
                    href="/contact"
                    className="px-6 py-4 bg-[#BA8E2D] text-white inline-flex items-center gap-2 rounded-sm hover:bg-yellow-700 mt-4"
                  >
                    Schedule A Consultation <IoIosArrowForward />
                  </Link>
                </Reveal>
              </div>

              {/* Hero Image */}
              <div className="w-full">
                <Image
                  src="/images/hero/Attorney.png"
                  alt="Attorney"
                  width={400}
                  height={500}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div>
        <div className="max-w-[1640px] mx-auto px-8 w-full pt-10 lg:pt-20 xl:pt-32">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:absolute md:bottom-[-20%]">

              {/* Card 1 */}
              <Reveal y={100} opacityFrom={0} duration={4}>
                <div className="
                  group relative overflow-hidden p-6 bg-white rounded-md space-y-2
                  shadow-[0px_10px_20px_rgba(0,0,0,0.1)] h-auto lg:h-60
                  transition-transform duration-300 ease-out hover:scale-105
                ">
                  <div className="absolute inset-0 bg-[#BA8E2D] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                  <div className="relative z-[1] space-y-2">
                    <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center text-white text-4xl
                                    group-hover:bg-white group-hover:text-[#BA8E2D] transition-all duration-300
                                    transform group-hover:scale-110">
                      <MdOutlinePersonalInjury />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold pt-2 group-hover:text-white transition-all duration-300">
                      Proven Results & Experience
                    </h4>
                    <p className="text-base font-normal text-[#666] group-hover:text-white transition-all duration-300">
                      Over 15 years of success in personal injury and criminal defense across Tampa Bay.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal y={100} opacityFrom={0} duration={4}>
                <div className="
                  group relative overflow-hidden p-6 bg-white rounded-md space-y-2
                  shadow-[0px_10px_20px_rgba(0,0,0,0.1)] h-auto lg:h-60
                  transition-transform duration-300 ease-out hover:scale-105
                ">
                  <div className="absolute inset-0 bg-[#BA8E2D] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                  <div className="relative z-[1] space-y-2">
                    <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center text-white text-4xl
                                    group-hover:bg-white group-hover:text-[#BA8E2D] transition-all duration-300
                                    transform group-hover:scale-110">
                      <IoGlobeOutline />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold pt-2 group-hover:text-white transition-all duration-300">
                      Personalized Attention
                    </h4>
                    <p className="text-base font-normal text-[#666] group-hover:text-white transition-all duration-300">
                      Every client is treated like family with honest, one-on-one guidance.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 3 */}
              <Reveal y={100} opacityFrom={0} duration={4}>
                <div className="
                  group relative overflow-hidden p-6 bg-white rounded-md space-y-2
                  shadow-[0px_10px_20px_rgba(0,0,0,0.1)] h-auto lg:h-60
                  transition-transform duration-300 ease-out hover:scale-105
                ">
                  <div className="absolute inset-0 bg-[#BA8E2D] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                  <div className="relative z-[1] space-y-2">
                    <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center text-white text-4xl
                                    group-hover:bg-white group-hover:text-[#BA8E2D] transition-all duration-300
                                    transform group-hover:scale-110">
                      <PiHandshakeFill />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold pt-2 group-hover:text-white transition-all duration-300">
                      24/7 Availability
                    </h4>
                    <p className="text-base font-normal text-[#666] group-hover:text-white transition-all duration-300">
                      We’re here day or night to protect your rights when it matters most.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 4 */}
              <Reveal y={100} opacityFrom={0} duration={4}>
                <div className="
                  group relative overflow-hidden p-6 bg-white rounded-md space-y-2
                  shadow-[0px_10px_20px_rgba(0,0,0,0.1)] h-auto lg:h-60
                  transition-transform duration-300 ease-out hover:scale-105
                ">
                  <div className="absolute inset-0 bg-[#BA8E2D] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                  <div className="relative z-[1] space-y-2">
                    <div className="w-16 h-16 bg-[#BA8E2D] flex items-center justify-center text-white text-4xl
                                    group-hover:bg-white group-hover:text-[#BA8E2D] transition-all duration-300
                                    transform group-hover:scale-110">
                      <FaAward />
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold pt-2 group-hover:text-white transition-all duration-300">
                      Award-Winning Team
                    </h4>
                    <p className="text-base font-normal text-[#666] group-hover:text-white transition-all duration-300">
                      Recognized by The National Trial Lawyers and Super Lawyers Rising Stars.
                    </p>
                  </div>
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
