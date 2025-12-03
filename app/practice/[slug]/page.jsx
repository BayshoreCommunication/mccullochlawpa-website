import React from "react";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import { PersonalInjuryServices } from "@/config/data";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import Image from "next/image";
import Link from "next/link";

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
  const metaData = PersonalInjuryServices.find(
    (service) => service.slug === params.slug
  );

  return {
    title: metaData?.title ?? "Service Not Found",
    description: metaData?.description ?? "",
    openGraph: {
      title: metaData?.title ?? "",
      description: metaData?.description ?? "",
      images: "/opengraph-image.png",
      url: `https://mccullochlawpa-website.vercel.app/practice/${metaData?.slug}`,
      type: "article",
      site_name: "Melamed Law",
    },
  };
}

const page = async ({ params }) => {
  const servicesDetails = PersonalInjuryServices.filter(
    (service) => service.slug === params.slug
  );

  if (!servicesDetails.length) {
    notFound();
  }

  return (
    <>
      <style>{css}</style>

      <BreadcrumbSection
        title="Explore the Services We Offer in 
Personal Injury and Criminal Defense"
        subtitle="McCulloch Law, P.A. offers a focused range of services..."
      />

      <section className="w-full px-8 py-8 md:py-16 bg-white">
        <div className="max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* LEFT CONTENT */}
            <div className="md:col-span-4 flex flex-col items-start mb-8 w-full">
              {servicesDetails.map((service, index) => (
                <div key={index}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1000}
                    height={500}
                  />
                  <div className="mt-5 text-base">
                    {parse(service.mainDescription)}
                  </div>
                </div>
              ))}
            </div>

            {/* SIDEBAR */}
            <div className="md:col-span-2 flex flex-col gap-5 md:pl-8">

              {/* SEARCH */}
              <div className="bg-[#F3F3F3] p-6 w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 rounded-md border border-[#D3D3D3] focus:outline-none focus:ring-2 focus:ring-primary text-base"
                />
              </div>

              {/* PERSONAL INJURY MENU */}
              <div className="bg-[#F3F3F3] p-6 w-full">
                <h2 className="text-2xl font-bold text-[#333] mb-2">
                  Personal Injury
                </h2>
                <div className="w-24 h-[3px] bg-[#C7A34B] mb-6"></div>

                <div className="space-y-6">
                  {PersonalInjuryServices.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/practice/${item.slug}`}
                      className="group flex items-center gap-3 transition-all"
                    >
                      <span className="text-xl group-hover:text-[#BA8E2D]">
                        »
                      </span>
                      <p className="text-base font-semibold group-hover:text-[#BA8E2D]">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CRIMINAL INJURY STATIC MENU */}
              <div className="bg-[#F3F3F3] p-6 w-full">
                <h2 className="text-2xl font-bold text-[#333] mb-2">
                  Criminal Injury
                </h2>
                <div className="w-24 h-[3px] bg-[#C7A34B] mb-6"></div>

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
                      className="group flex items-center gap-3 cursor-pointer transition-all"
                    >
                      <span className="text-xl group-hover:text-[#BA8E2D]">
                        »
                      </span>
                      <p className="text-base font-semibold group-hover:text-[#BA8E2D]">
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
