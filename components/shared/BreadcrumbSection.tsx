"use client";

import React from "react";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

interface BreadcrumbSectionProps {
  title: string;
  subtitle: string;
  className?: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <section
      className={`relative w-full h-[380px] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <Image
        src="/images/breadcrumb/breadcrumb.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0d2c3b]/70" />

      {/* Content */}
      <Reveal y={100} opacityFrom={0} duration={3}>
      <div className="relative z-10 text-center  px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 typewriter">
          {title}
        </h1>

        <p className="text-white text-base md:text-base leading-relaxed">
          {subtitle}
        </p>
      </div>
      </Reveal>
    </section>
  );
};

export default BreadcrumbSection;
