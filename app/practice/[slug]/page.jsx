// export default page;
import React from "react";
import parse from "html-react-parser";
import Head from "next/head";
import { notFound } from "next/navigation";
import { PersonalInjuryServices } from "@/config/data";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import Image from "next/image";

const css = `
  h1{
    font-size: 40px;
    font-weight: 900;
    padding-top: 10px;
  }
  h2{
    padding-top: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  p{
    padding-top: 2px;
    padding-bottom: 2px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;
    
  }
  li{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  br{
    padding-top: 1px;
    padding-bottom: 1px;
}
nav{
  padding-top: 12px;
}

`;

export async function generateMetadata({ params }) {
  const metaData = PersonalInjuryServices?.filter(
    (service) => service.slug === params.slug
  );
  return {
    title: metaData[0]?.title,
    description: metaData[0]?.description,
    openGraph: {
      title: metaData[0]?.title,
      description: metaData[0]?.description,
      images: "/opengraph-image.png",
      url: `https://mccullochlawpa-website.vercel.app/practice/${metaData[0]?.slug}`,
      type: "article",
      site_name: "Melamed Law",
    },
  };
}

const page = async ({ params }) => {
  const servicesDetails = PersonalInjuryServices?.filter(
    (service) => service.slug === params.slug
  );

  if (!servicesDetails || servicesDetails.length === 0) {
    notFound();
  }
  // console.log("services", areaspracticeData);
  return (
    <>
      <style>{css}</style>
      <BreadcrumbSection
        title="Explore the Services We Offer in 
Personal Injury and Criminal Defense"
        subtitle="McCulloch Law, P.A. offers a focused range of services designed to support clients during some of the most challenging moments of their lives. The firm handles both personal injury and criminal defense matters with the same level of care, preparation, and attention to detail. Every case begins with understanding your situation, explaining what to expect, and building a strategy that fits your needs. Whether you’ve been injured in an accident or are facing a criminal charge, the goal is to provide steady guidance, clear communication, and strong representation from start to finish."
      />

      <section className="w-full px-8 py-8 md:py-16 bg-white">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Parser */}

            <div className="md:col-span-4 flex flex-col items-start justify-start mb-8 w-full ">
              {servicesDetails?.map((services, index) => (
                <div key={index} className="">
                  <Image
                    src={services?.image}
                    alt={services?.title}
                    width={1000}
                    height={500}
                  ></Image>
                  <div className="mt-5 text-base">
                    {parse(services?.mainDescription)}
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-2 flex flex-col items-start gap-5 justify-start mb-8 md:pl-8 w-full">
              <div className="bg-[#F3F3F3] p-6 w-full">
                <div className="w-full  mx-auto">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-3 rounded-md border border-[#D3D3D3] focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  />
                </div>
              </div>

              <div className="bg-[#F3F3F3] p-6 w-full">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-[#333] mb-2">
                  Personal Injury
                </h2>
                <div className="w-24 h-[3px] bg-[#C7A34B] mb-6"></div>{" "}
                {/* Gold underline */}
                {/* Menu Items */}
                <div className="space-y-6">
                  {[
                    "An Overview",
                    "Bicycle Accident",
                    "Truck Accidents",
                    "Motorcycle Accidents",
                    "Uber, UberEats And Lyft Accident",
                    "Slip And Fail",
                    "Premises Liability",
                    "Dog Bites",
                    "Products Liability",
                    "Medical Malpractice",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
              group 
              flex items-center gap-3 cursor-pointer
              transition-all duration-200
            "
                    >
                      <span
                        className="
                text-xl 
                group-hover:text-[#BA8E2D]
                group-active:text-[#BA8E2D]
                transition-colors duration-200
              "
                      >
                        »
                      </span>

                      <p
                        className="
                text-base font-semibold text-[#333]
                group-hover:text-[#BA8E2D]
                group-active:text-[#BA8E2D]
                transition-colors duration-200
              "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F3F3F3] p-6 w-full">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-[#333] mb-2">
                  Criminal Injury
                </h2>
                <div className="w-24 h-[3px] bg-[#C7A34B] mb-6"></div>{" "}
                {/* Gold underline */}
                {/* Menu Items */}
                <div className="space-y-6">
                  {[
                    "An Overview",
                    "Bicycle Accident",
                    "Truck Accidents",
                    "Motorcycle Accidents",
                    "Uber, UberEats And Lyft Accident",
                    "Slip And Fail",
                    "Premises Liability",
                    "Dog Bites",
                    "Products Liability",
                    "Medical Malpractice",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
              group 
              flex items-center gap-3 cursor-pointer
              transition-all duration-200
            "
                    >
                      <span
                        className="
                text-xl 
                group-hover:text-[#BA8E2D]
                group-active:text-[#BA8E2D]
                transition-colors duration-200
              "
                      >
                        »
                      </span>

                      <p
                        className="
                text-base font-semibold text-[#333]
                group-hover:text-[#BA8E2D]
                group-active:text-[#BA8E2D]
                transition-colors duration-200
              "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
