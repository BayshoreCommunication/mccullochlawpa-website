"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CriminalInjuryServices, PersonalInjuryServices } from "@/config/data";
import SidebarTestimonials from "./SidebarTestimonials";

interface Blog {
  slug: string;
  title: string;
  published: boolean;
  featuredImage?: {
    image?: {
      url: string;
    };
    altText?: string;
  };
}

export default function RightSideBar({ blogs = [] }: { blogs: Blog[] }) {
  const latestBlogs = blogs
    ?.filter((blog) => blog?.published && blog?.slug)
    ?.slice(0, 10);

  return (
    <aside className="w-full max-w-[400px] space-y-8 pt-0 md:pt-16 mb-8">
      {/* PROFILE */}
      <div className="shadow-lg rounded-md p-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-[130px] h-[130px] rounded-md overflow-hidden">
            <Image
              src="/images/hero/Attorney.png"
              alt="Attorney"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <p className="text-2xl text-gray-700 mt-2">
          Trusted & Experienced Legal Representation Across Tampa Bay
        </p>

        <div className="mt-6">
          <span className="bg-primary text-white px-6 py-2 font-semibold">
            McCulloch Law, P.A.
          </span>
        </div>
      </div>
      {/* Criminal Defense */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4 border-b pb-2">
          Criminal Defense
        </h3>

        <div className="space-y-3">
          {CriminalInjuryServices.map((service, index) => (
            <Link
              key={index}
              href={`/practice/${service.slug}`}
              className="block text-sm font-medium text-gray-800 hover:text-primary transition"
            >
              • {service.title}
            </Link>
          ))}
        </div>
      </div>
      {/* Tampa Office */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Our Tampa Office</h3>

        <div className="h-40 rounded mb-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=238+E+Davis+Blvd+Tampa+FL+33606&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        <p className="font-semibold uppercase">McCulloch Law, P.A.</p>

        <p className="text-sm text-gray-600 mt-1">
          238 East Davis Boulevard, Ste 202 Tampa, FL 33606
        </p>

        <p className="text-blue-600 font-bold mt-3">(813) 444-2817</p>

        <a
          href="https://www.google.com/maps?q=238+E+Davis+Blvd+Tampa+FL+33606"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          GET DIRECTIONS
        </a>
      </div>
      {/* Personal Injury */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4 border-b pb-2">
          Personal Injury
        </h3>

        <div className="space-y-3">
          {PersonalInjuryServices.map((service, index) => (
            <Link
              key={index}
              href={`/practice/${service.slug}`}
              className="block text-sm font-medium text-gray-800 hover:text-primary transition"
            >
              • {service.title}
            </Link>
          ))}
        </div>
      </div>
      {/* Recent Blogs */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold mb-4 border-b pb-2">Recent Blogs</h3>

        <div className="space-y-4">
          {latestBlogs.length > 0 ? (
            latestBlogs.map((blog, index) => (
              <Link
                key={index}
                href={`/blogs/${blog.slug}`}
                className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded transition"
              >
                <div className="relative w-[70px] h-[60px] flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={
                      blog?.featuredImage?.image?.url ||
                      "/images/placeholder.jpg"
                    }
                    alt={blog?.featuredImage?.altText || blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                  {blog.title}
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500">No blogs available</p>
          )}
        </div>
      </div>
      {/* Testimonial Section */}
      <SidebarTestimonials />
    </aside>
  );
}
