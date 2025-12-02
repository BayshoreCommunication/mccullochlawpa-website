"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const blogs = [
  {
    title: "What to Do After Being Arrested in Florida",
    date: "23 Sep 2024",
    description:
      "Learn the critical steps to take immediately after being arrested in Florida to protect your rights and strengthen your defense.",
    image: "/images/blogs/arrested-in-florida.jpg",
    slug: "what-to-do-after-being-arrested-in-florida",
  },
  {
    title:
      "How a Former Prosecutor’s Experience Can Strengthen Your Criminal Defense",
    date: "22 Sep 2024",
    description:
      "See how insider knowledge helps build stronger, smarter defense strategies by anticipating the prosecution’s approach and identifying case weaknesses.",
    image: "/images/blogs/former-prosecutor-defense.jpg",
    slug: "how-prosecutor-experience-strengthens-defense",
  },
  {
    title: "What To Do After a Car Accident in Florida",
    date: "21 Sep 2024",
    description:
      "Learn the right steps after a crash to protect your safety and legal rights—who to contact, what to document, and how to avoid mistakes.",
    image: "/images/blogs/car-accident-in-florida.jpg",
    slug: "what-to-do-after-car-accident-in-florida",
  },
  {
    title: "What to Do After Being Arrested in Florida",
    date: "23 Sep 2024",
    description:
      "Learn the critical steps to take immediately after being arrested in Florida to protect your rights and strengthen your defense.",
    image: "/images/blogs/arrested-in-florida.jpg",
    slug: "what-to-do-after-being-arrested-in-florida",
  },
  {
    title:
      "How a Former Prosecutor’s Experience Can Strengthen Your Criminal Defense",
    date: "22 Sep 2024",
    description:
      "See how insider knowledge helps build stronger, smarter defense strategies by anticipating the prosecution’s approach and identifying case weaknesses.",
    image: "/images/blogs/former-prosecutor-defense.jpg",
    slug: "how-prosecutor-experience-strengthens-defense",
  },
  {
    title: "What To Do After a Car Accident in Florida",
    date: "21 Sep 2024",
    description:
      "Learn the right steps after a crash to protect your safety and legal rights—who to contact, what to document, and how to avoid mistakes.",
    image: "/images/blogs/car-accident-in-florida.jpg",
    slug: "what-to-do-after-car-accident-in-florida",
  },
  {
    title: "What to Do After Being Arrested in Florida",
    date: "23 Sep 2024",
    description:
      "Learn the critical steps to take immediately after being arrested in Florida to protect your rights and strengthen your defense.",
    image: "/images/blogs/arrested-in-florida.jpg",
    slug: "what-to-do-after-being-arrested-in-florida",
  },
  {
    title:
      "How a Former Prosecutor’s Experience Can Strengthen Your Criminal Defense",
    date: "22 Sep 2024",
    description:
      "See how insider knowledge helps build stronger, smarter defense strategies by anticipating the prosecution’s approach and identifying case weaknesses.",
    image: "/images/blogs/former-prosecutor-defense.jpg",
    slug: "how-prosecutor-experience-strengthens-defense",
  },
  {
    title: "What To Do After a Car Accident in Florida",
    date: "21 Sep 2024",
    description:
      "Learn the right steps after a crash to protect your safety and legal rights—who to contact, what to document, and how to avoid mistakes.",
    image: "/images/blogs/car-accident-in-florida.jpg",
    slug: "what-to-do-after-car-accident-in-florida",
  },
  {
    title: "What to Do After Being Arrested in Florida",
    date: "23 Sep 2024",
    description:
      "Learn the critical steps to take immediately after being arrested in Florida to protect your rights and strengthen your defense.",
    image: "/images/blogs/arrested-in-florida.jpg",
    slug: "what-to-do-after-being-arrested-in-florida",
  },
  {
    title:
      "How a Former Prosecutor’s Experience Can Strengthen Your Criminal Defense",
    date: "22 Sep 2024",
    description:
      "See how insider knowledge helps build stronger, smarter defense strategies by anticipating the prosecution’s approach and identifying case weaknesses.",
    image: "/images/blogs/former-prosecutor-defense.jpg",
    slug: "how-prosecutor-experience-strengthens-defense",
  },
  {
    title: "What To Do After a Car Accident in Florida",
    date: "21 Sep 2024",
    description:
      "Learn the right steps after a crash to protect your safety and legal rights—who to contact, what to document, and how to avoid mistakes.",
    image: "/images/blogs/car-accident-in-florida.jpg",
    slug: "what-to-do-after-car-accident-in-florida",
  },
];

export default function BlogPage() {
  return (
    <section className="w-full px-8 py-8 md:py-16">
      <div className="max-w-[1640px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 max-w-3xl mx-auto">
          <Stagger>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <p className="text-base font-normal text-[#666666] mb-4">
                Latest Blogs{" "}
              </p>
            </Reveal>
            <Reveal tag="h2" y={16} opacityFrom={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center ">
                Top  <span className="text-[#BA8E2D]">Blogs </span> Related To
                Law, Cases & Consulting
              </h2>
            </Reveal>
          </Stagger>
        </div>

        {/* blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Reveal key={index} y={16} opacityFrom={0}>
              <Link href="/blogs" className="block h-full">
                <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition  flex flex-col items-center text-center border border-gray-100 h-full cursor-pointer hover:bg-[#BA8E2D] hover:scale-105 transform duration-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={224}
                    className="w-full h-auto object-cover object-top rounded-t-xl"
                  />
                  <div className="p-6 text-start flex flex-col justify-between flex-grow gap-4">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-white duration-300 text-gray-900">
                        {blog.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 group-hover:text-white/90 duration-300">
                        {blog.date}
                      </p>
                      <p className="mt-3 text-base text-gray-600 group-hover:text-white/90 duration-300">
                        {blog.description}
                      </p>
                    </div>
                    <div className="">
                      <Link
                        href="#"
                        className="px-6 py-4 bg-[#BA8E2D] text-white inline-flex items-center gap-2 rounded-sm group-hover:bg-white group-hover:text-[#BA8E2D] mt-4 "
                      >
                        Read More <IoIosArrowForward />
                      </Link>
                    </div>
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
