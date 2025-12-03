"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About The Attorney" },
    { href: "/practice", label: "Practice Areas" },
    // { href: "/videos", label: "Videos" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full relative">
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-white text-gray-700 border-b">
        <div className="max-w-[1640px] mx-auto px-8 flex justify-between items-center text-sm">
          
          {/* Left Phone Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <IoIosCall className="text-[#BA8E2D]" />
              <span className="font-medium">(813) 444-2817</span>
            </div>

            {/* Center Text */}
            <p className="hidden md:block text-gray-600">
              Call a law firm that cares, available 24/7 for a free consultation.
            </p>
          </div>

          {/* Right Button */}
          <Link
            href="#"
            className="bg-[#BA8E2D] text-white px-4 py-4 rounded-sm hover:bg-yellow-700 transition"
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header
        className={`transition-all duration-700 ${
          isSticky
            ? "fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50"
            : "relative bg-white"
        }`}
      >
        <div className="max-w-[1640px] mx-auto px-8 py-4 flex justify-between items-center relative">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={1000}
              height={500}
              className="w-[180px] h-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-gray-800 font-medium items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-yellow-700 transition ${
                  pathname === item.href ? "text-yellow-700 underline" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* ================= MOBILE MENU (Absolute Positioned) ================= */}
          {mobileOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white px-8 py-4 space-y-4 border-t shadow z-40">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block ${
                    pathname === item.href ? "text-yellow-700" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent layout shift */}
      {isSticky && <div className="h-[80px]" />}
    </div>
  );
};

export default Navbar;
