"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import parse from "html-react-parser";

export type BlogFeaturedImage = {
  image?: { url?: string };
};

export type BlogItem = {
  title: string;
  slug: string;
  date: string | number | Date;
  image?: string;
  body?: string | React.ReactNode;
  altText?: string;
  featuredImage?: BlogFeaturedImage;
  published?: boolean;
};

export type BlogsProps = {
  blogPost?: { data?: BlogItem[] } | BlogItem[];
};

export default function Blogs({ blogPost }: BlogsProps) {
  const source: unknown = Array.isArray(blogPost)
    ? blogPost
    : (blogPost as any)?.data;
  const rawPosts: BlogItem[] = Array.isArray(source)
    ? (source as BlogItem[])
    : [];
  const posts: BlogItem[] = rawPosts.filter((b: any) => b?.published !== false);

  const normalizeDateInput = (date: unknown): Date | null => {
    if (date == null) return null;
    // Date instance
    if (date instanceof Date) return isNaN(date.getTime()) ? null : date;
    // Numeric-like strings or numbers
    const asNumber =
      typeof date === "number"
        ? date
        : typeof date === "string" && /^\d+$/.test(date)
        ? Number(date)
        : null;
    if (typeof asNumber === "number" && !Number.isNaN(asNumber)) {
      // Heuristic: seconds vs milliseconds
      const ms = asNumber < 1e12 ? asNumber * 1000 : asNumber;
      const d = new Date(ms);
      return isNaN(d.getTime()) ? null : d;
    }
    // ISO or other date strings
    if (typeof date === "string") {
      const d = new Date(date);
      if (!isNaN(d.getTime())) return d;
      return null;
    }
    return null;
  };

  const postDate = (date: unknown): string | null => {
    if (date == null) return null;
    const parsed = normalizeDateInput(date);
    if (parsed) {
      return parsed.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    // Fallback: if we got a string that isn't parseable, show it as-is
    if (typeof date === "string" && date.trim().length > 0) return date;
    return null;
  };

  return (
    <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
      {/* Header */}
      <Reveal tag="div" y={16} opacityFrom={0}>
        <div className=" mb-8">
          <h2 className="text-3xl lg:text-[38px] font-bold text-gray-900"></h2>
        </div>
      </Reveal>

      {/* <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <Stagger>
          <Reveal tag="div" y={16} opacityFrom={0}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                Latest From the <span className="text-primary">Blog</span>
              </h2>
            </div>
          </Reveal>
          <Reveal y={12} opacityFrom={0}>
            <Link
              href="/the-wellness-journal"
              className="mt-6 md:mt-0 border border-black rounded-full px-6 py-2 transition text-gray-900 hover:bg-black hover:text-white"
            >
              Explore Blogs →
            </Link>
          </Reveal>
        </Stagger>
      </div> */}

      {posts.length === 0 ? (
        <div className="text-center py-16 text-gray-600">No posts here</div>
      ) : (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-gray-300 !opacity-100",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="!pb-12"
        >
          {posts.map((blog: BlogItem, index: number) => (
            <SwiperSlide key={index}>
              <Link
                href={`/the-wellness-journal/${blog.slug}`}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow block"
              >
                {/* Blog Image */}
                <div className="w-full p-4 lg:p-6">
                  <Image
                    src={
                      blog.image ||
                      blog?.featuredImage?.image?.url ||
                      "/placeholder.jpg"
                    }
                    alt={blog.altText || blog.title}
                    width={1000}
                    height={667}
                    className="object-cover rounded-xl w-full h-48"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-4 lg:p-6 pt-0 flex flex-col flex-1 justify-between">
                  <div>
                    {(() => {
                      const anyBlog = blog as any;
                      const rawDate: unknown =
                        anyBlog?.date ??
                        anyBlog?.createdAt ??
                        anyBlog?.publishedAt ??
                        anyBlog?.created_at ??
                        anyBlog?.published_at ??
                        anyBlog?.attributes?.date ??
                        anyBlog?.attributes?.createdAt ??
                        anyBlog?.attributes?.publishedAt ??
                        anyBlog?.attributes?.created_at ??
                        anyBlog?.attributes?.published_at;
                      const formatted = postDate(rawDate) ?? "Date unavailable";
                      return (
                        <p className="text-xs font-medium text-gray-500 uppercase flex items-center gap-2">
                          {formatted}
                        </p>
                      );
                    })()}
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">
                      {blog.title}
                    </h3>
                    {blog.body && (
                      <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {typeof blog.body === "string"
                          ? parse(blog.body)
                          : blog.body}
                      </div>
                    )}
                  </div>

                  <span className="text-primary text-sm font-medium hover:underline mt-4">
                    Read More
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
