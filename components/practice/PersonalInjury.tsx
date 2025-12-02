"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";

const PersonalInjuryServices = [
  {
    id: 1,
    title: "An Overview",
    description:
      "Injuries can turn life upside down, and you shouldn’t have to face the aftermath alone. We guide you through the process and fight for the compensation you deserve.",
    slug: "an-overview",
  },
  {
    id: 2,
    title: "Auto Accident",
    description:
      "Support for clients injured in auto accidents, including guidance through the claims process and help pursuing fair compensation.",
    slug: "auto-accident",
  },
  {
    id: 3,
    title: "Bicycle Accident",
    description:
      "Representation for cyclists hurt by negligent drivers, with clear direction on how to move forward with a claim.",
    slug: "bicycle-accident",
  },
  {
    id: 4,
    title: "Truck Accidents",
    description:
      "Protection for clients after serious truck accidents, focused on preserving rights and pursuing the recovery they deserve.",
    slug: "truck-accidents",
  },
  {
    id: 5,
    title: "Motorcycle Accidents",
    description:
      "Assistance for injured riders, from navigating the claims process to seeking full and fair compensation.",
    slug: "motorcycle-accidents",
  },
  {
    id: 6,
    title: "Uber, UberEats And Lyft Accident",
    description:
      "Help for individuals injured in rideshare-related accidents, including support in seeking compensation.",
    slug: "uber-ubereats-lyft-accident",
  },
  {
    id: 7,
    title: "Slip, Trip And Fall",
    description:
      "Guidance for clients injured in slip-trip-and-fall incidents, ensuring they understand their rights and available options.",
    slug: "slip-trip-fall",
  },
  {
    id: 8,
    title: "Premises Liability",
    description:
      "Representation for injuries caused by unsafe property conditions, with strategic support through each step of the claim.",
    slug: "premises-liability",
  },
  {
    id: 9,
    title: "Dog Bites",
    description:
      "Assistance for clients hurt in dog bite incidents, including pursuing compensation and protecting their rights.",
    slug: "dog-bites",
  },
  {
    id: 10,
    title: "Medical Malpractice",
    description:
      "Support for individuals harmed by medical errors, with a focus on securing compensation for recovery.",
    slug: "medical-malpractice",
  },
  {
    id: 11,
    title: "Products Liability",
    description:
      "Representation for clients injured by defective or dangerous products, along with help building a strong claim.",
    slug: "products-liability",
  },
  {
    id: 12,
    title: "Wrongful Death",
    description:
      "When a friend or family member passes away due to someone else’s negligence, our priority is to secure critical evidence, open a thorough investigation, and protect your family's right to justice.",
    slug: "wrongful-death",
  },
  {
    id: 13,
    title: "Fatal Accidents",
    description:
      "When negligence causes an accidental death, we help families understand their rights, investigate the case, and pursue the compensation they deserve.",
    slug: "fatal-accidents",
  },
];

export default function PersonalInjury() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-white">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-3xl mx-auto">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <p className="text-base font-normal text-[#666666] mb-4 inline-block border-b-1 border-[#BA8E2D] pb-2">
                Practice Areas
              </p>
            </Reveal>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
                Personal Injury
              </h2>
            </Reveal>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <p className="text-base text-center font-normal text-[#666666] mt-3 ">
                We help clients navigate personal injury claims with clear
                guidance, strong advocacy, and a focus on securing the
                compensation they need to move forward.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PersonalInjuryServices.map((service, index) => (
            <Reveal key={index} y={16} opacityFrom={0}>
              <Link href="/practice" className="block h-full">
                <div className="group bg-white hover:bg-[#BA8E2D] duration-300 rounded-2xl shadow-sm hover:shadow-md transition p-6 lg:p-10 flex flex-col items-center text-center border border-gray-100 h-full cursor-pointer hover:scale-105 transform ">
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex justify-center items-center shadow-lg text-[#BA8E2D]
                  group-hover:bg-white duration-300"
                  >
                    <FaBook size={24} />
                  </div>
                  <div className="pt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 group-hover:text-white/90 duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
