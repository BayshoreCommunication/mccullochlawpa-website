"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

/* ---------------- CASE DATA ---------------- */
const caseData: Record<string, { charge: string; outcome: string }> = {
  "State of Florida vs. J.R.M.": {
    charge: "Possession of Heroin - Third Degree Felony",
    outcome: "Case Dismissed by Motion",
  },
  "State of Florida vs. O.A.": {
    charge: "Battery on a Pregnant Female – Second Degree Felony",
    outcome: "Not Filed",
  },
  "State of Florida vs. J.E.C.": {
    charge:
      "Trafficking in Amphetamines (14–28 grams) - First Degree Felony – Mandatory 3 Years in Prison & $50,000 Fine\n" +
      "Possession of Controlled Substance - Third Degree Felony\n" +
      "Felony Possession of Cannabis - Third Degree Felony",
    outcome:
      "Trafficking in Amphetamines (14–28 grams) - First Degree Felony – Dismissed by Motion to Dismiss\n" +
      "Possession of Controlled Substance – Dismissed\n" +
      "Felony Possession of Cannabis – Withhold of Adjudication",
  },
  "State of Florida vs. N.P.B.": {
    charge: "Child Abuse – Third Degree Felony",
    outcome: "Case Dismissed",
  },
  "State of Florida vs. R.M.": {
    charge:
      "5th Driving Under the Influence (DUI) with Property Damage/Injury – First Degree Misdemeanor",
    outcome: "Case Dismissed",
  },
};

/* ---------------- COMPONENT ---------------- */
export default function CaseSection() {
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const updateDirection = () => {
      setDirection(window.innerWidth <= 760 ? "vertical" : "horizontal");
    };

    updateDirection();
    window.addEventListener("resize", updateDirection);
    return () => window.removeEventListener("resize", updateDirection);
  }, []);

  return (
    <div
      className="w-full"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        direction={direction}
        loop
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full"
      >
        {Object.entries(caseData).map(([title, item], index) => (
          <SwiperSlide
            key={index}
            className="h-full flex"
          >
            {/* CARD */}
            <div className="bg-[#b88b24] text-white p-6 border border-white/10 rounded-md flex flex-col w-full">
              
              {/* TITLE */}
              <h3 className="font-bold text-lg mb-4">
                {title}
              </h3>

              {/* CONTENT */}
              <div className="flex gap-6 flex-1">
                <div className="flex-1 flex flex-col">
                  <p className="font-semibold mb-1">Charge:</p>
                  <p className="whitespace-pre-line">
                    {item.charge}
                  </p>
                </div>

                <div className="flex-1 flex flex-col">
                  <p className="font-semibold mb-1">Outcome:</p>
                  <p className="whitespace-pre-line">
                    {item.outcome}
                  </p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
