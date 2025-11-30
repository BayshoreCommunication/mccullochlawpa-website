"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSectionProps {
  subtitle: string;
  title: string;
  title2?: React.ReactNode;
  highlight?: string;
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  subtitle,
  title,
  title2,
  highlight,
  items,
  className,
}) => {
  return (
    <section className={`py-16 text-center bg-[#f6fff0] ${className || ""}`}>
      <div className="max-w-4xl mx-auto px-10">
        {/* Subtitle */}
        <p className="inline-block px-10 py-2 bg-[#eaf5e4] rounded-full text-base lg:text-xl font-semibold text-gray-700">
          {subtitle}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
          {title}
          {highlight && (
            <span className="text-[#4E741E] px-3">{highlight}</span>
          )}
          {title2}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mt-6 text-base lg:text-lg text-gray-700"
        >
          <ol className="flex items-center justify-center gap-2 flex-wrap">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary underline-offset-2 hover:underline transition-colors font-semibold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-primary underline">
                    {item.label}
                  </span>
                )}
                {index < items.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
