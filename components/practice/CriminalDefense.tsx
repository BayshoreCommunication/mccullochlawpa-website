"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { FaBook } from "react-icons/fa6";

const CriminalInjuryServices = [
  {
    title: "An Overview",
    description:
      "Facing a criminal charge can be overwhelming. We guide you through the legal process, protect your rights, and build a strong defense to pursue the best possible outcome.",
    slug: "an-overview",
  },
  {
    title: "Assault, Battery, Stalking",
    description:
      "Defense for clients facing assault, battery, or stalking charges, with a focus on protecting their rights throughout the case.",
    slug: "assault-battery-stalking",
  },
  {
    title: "Arson and Criminal Mischief",
    description:
      "Representation for individuals charged with arson or criminal mischief, ensuring thorough investigation and a strong defense.",
    slug: "arson-criminal-mischief",
  },
  {
    title: "Burglary & Trespass",
    description:
      "Legal defense for clients accused of burglary or trespassing, ensuring their rights are protected in each step.",
    slug: "burglary-trespass",
  },
  {
    title: "Domestic Violence",
    description:
      "Representation for individuals accused of domestic violence, with support for both their defense and protection of their rights.",
    slug: "domestic-violence",
  },
  {
    title: "Drug Crimes",
    description:
      "Defense for all levels of drug-related charges, challenging evidence and seeking the best possible outcome.",
    slug: "drug-crimes",
  },
  {
    title: "DUI",
    description:
      "Strong representation for DUI charges, from first-time offenses to complex cases requiring expert analysis.",
    slug: "dui",
  },
  {
    title: "Probation",
    description:
      "Comprehensive support for clients facing probation violations, ensuring their rights are defended and their future protected.",
    slug: "probation",
  },
  {
    title: "Fraud",
    description:
      "Defense for clients accused of fraud, focusing on detail-driven investigation and strategic representation.",
    slug: "fraud",
  },
  {
    title: "Homicide / Attempted Homicide",
    description:
      "Skilled defense against homicide or attempted homicide allegations, backed by thorough investigation.",
    slug: "homicide-attempted-homicide",
  },
  {
    title: "Injunctions",
    description:
      "Assistance with defending or obtaining injunctions, while protecting clients’ legal rights.",
    slug: "injunctions",
  },
  {
    title: "Juvenile Crimes",
    description:
      "Representation for juveniles accused of criminal offenses, ensuring their rights and future are protected.",
    slug: "juvenile-crimes",
  },
  {
    title: "Misdemeanors",
    description:
      "Defense for clients facing misdemeanor charges, ensuring they understand the process and receive strong representation.",
    slug: "misdemeanors",
  },
  {
    title: "Robbery",
    description:
      "Focused defense for robbery charges, including detailed investigation and aggressive representation.",
    slug: "robbery",
  },
  {
    title: "Theft Crimes",
    description:
      "Representation for theft-related offenses — ensuring proper investigation, strong defense, and protection of clients’ rights.",
    slug: "theft-crimes",
  },
  {
    title: "Seal / Expunge",
    description:
      "Help sealing or expunging criminal records to support clients in moving forward with their lives.",
    slug: "seal-expunge",
  },
  {
    title: "Sex Crimes",
    description:
      "Discreet, careful representation for clients accused of sexual offenses, ensuring a strong and thorough defense.",
    slug: "sex-crimes",
  },
  {
    title: "Violation of Probation",
    description:
      "Support for individuals accused of violating probation, ensuring fair treatment and a proper defense.",
    slug: "violation-of-probation",
  },
  {
    title: "Weapons & Firearms Charges",
    description:
      "Representation for clients facing weapons or firearms-related charges, ensuring their rights are fully protected.",
    slug: "weapons-firearms-charges",
  },
  {
    title: "Driving with a Suspended or Revoked License",
    description:
      "Legal support for clients accused of driving with a suspended or revoked license, helping them navigate the system and pursue a positive resolution.",
    slug: "driving-with-suspended-or-revoked-license",
  },
  {
    title: "Vehicular Manslaughter",
    description:
      "Defense for individuals facing vehicular manslaughter charges, with dedicated investigation and strategic representation.",
    slug: "vehicular-manslaughter",
  },
  {
    title: "Speeding and High-Speed Violations",
    description:
      "Representation for speeding and high-speed driving violations, helping clients avoid severe penalties and protect their driving record.",
    slug: "speeding-high-speed-violations",
  },
];

export default function CriminalDefense() {
  return (
    <section className="w-full px-8 py-8 md:py-16 bg-[#F9F9F9]">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-3xl mx-auto">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
                Criminal Defense
              </h2>
            </Reveal>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <p className="text-base text-center font-normal text-[#666666] mt-3">
                We defend clients facing criminal charges with clear guidance,
                steady support, and a strategy built to protect their rights at
                every step.
              </p>
            </Reveal>
          </Stagger>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CriminalInjuryServices.map((service, index) => (
            <Reveal key={index} y={16} opacityFrom={0}>
              <Link href="{`/practice/${service?.slug}`}" className="block h-full">
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
