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
      "Dismissed by Motion to Dismiss\n" +
      "Possession of Controlled Substance – Dismissed\n" +
      "Felony Possession of Cannabis – Withhold of Adjudication",
  },

  "State of Florida vs. N.P.B.": {
    charge: "Child Abuse – Third Degree Felony",
    outcome: "Case Dismissed",
  },

  "State of Florida vs. C.P. (Conveyance)": {
    charge: "Burglary of an Unoccupied Conveyance – Third Degree Felony",
    outcome: "Case Dismissed",
  },

  "State of Florida vs. C.P. (Structure)": {
    charge: "Burglary of an Unoccupied Structure – Third Degree Felony",
    outcome: "Case Dismissed",
  },

  "State of Florida vs. R.M.": {
    charge:
      "5th Driving Under the Influence (DUI) with Property Damage/Injury – First Degree Misdemeanor",
    outcome: "Case Dismissed",
  },

  "State of Florida vs. S.C.M.": {
    charge:
      "Possession of Cocaine - Third Degree Felony\n" +
      "Possession of Cannabis less than 20 grams - First Degree Misdemeanor",
    outcome:
      "Attorney Drew McCulloch was able to prevent the case from being filed.\n" +
      "Possession of Cocaine - Third Degree Felony – Not Filed\n" +
      "Possession of Cannabis less than 20 grams - First Degree Misdemeanor – Not Filed",
  },

  "State of Florida vs. L.D.R.": {
    charge:
      "Driving Under the Influence (DUI) Above .15 – First/Second Degree Misdemeanor",
    outcome: "Case Dismissed by Motion",
  },

  "State of Florida vs. M.C.": {
    charge:
      "Driving Under the Influence (DUI) – First/Second Degree Misdemeanor",
    outcome: "Case Dismissed by Motion",
  },

  "State of Florida vs. F.S.H.": {
    charge:
      "Resisting Officer with Violence - Second Degree Felony\n" +
      "Battery on a Law Enforcement Officer - Third Degree Felony",
    outcome:
      "Attorney Drew McCulloch was able to prevent both charges from being filed.\n" +
      "Resisting Officer with Violence - Second Degree Felony – Not Filed\n" +
      "Battery on a Law Enforcement Officer - Third Degree Felony – Not Filed",
  },

  "State of Florida vs. V.A.S. (Property Damage/Injury)": {
    charge:
      "2nd Driving Under the Influence within 5 years (DUI) with Property Damage/Injury – First Degree Misdemeanor",
    outcome: "Case Dismissed by Motion",
  },

  "State of Florida vs. V.A.S. (Alcohol/Drugs)": {
    charge:
      "2nd Driving Under the Influence within 5 years (DUI) with Alcohol/Drugs – First Degree Misdemeanor",
    outcome: "Case Dismissed by Motion",
  },

  "State of Florida vs. V.A.S. (BAL > .15)": {
    charge:
      "2nd Driving Under the Influence within 5 years (DUI) BAL > .15 – First Degree Misdemeanor",
    outcome: "Case Dismissed by Motion",
  },
};

/* ---------------- COMPONENT ---------------- */
export default function CaseSection() {
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal",
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
        slidesPerView={direction === "vertical" ? 1 : 3} // ✅ FIX
        spaceBetween={20}
        direction={direction}
        loop
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={7000}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-[360px] md:h-auto [&_.swiper-wrapper]:items-stretch" // ✅ FIX
      >
        {Object.entries(caseData).map(([title, item], index) => (
          <SwiperSlide key={index} className="flex">
            <div className="bg-[#b88b24] text-white p-6 border border-white/10 rounded-md flex flex-col w-full h-[360px] md:h-[350px]">
              <h3 className="font-bold text-lg mb-4">{title}</h3>

              <div className="flex gap-6 flex-1">
                <div className="flex-1">
                  <p className="font-semibold mb-1">Charge:</p>
                  <p className="whitespace-pre-line">{item.charge}</p>
                </div>

                <div className="flex-1">
                  <p className="font-semibold mb-1">Outcome:</p>
                  <p className="whitespace-pre-line">{item.outcome}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
