"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaGlobe,
  FaGoogle,
  FaLinkedinIn,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#1D3446] py-14 text-white">
      <div className="max-w-[1640px] mx-auto px-6 md:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Column 1 - Logo + Info */}
          <div>
            <Image
              src="/images/footer-logo.png"
              alt="Logo"
              width={200}
              height={70}
              className="w-full max-w-[180px]"
            />

            <p className="text-sm mt-4 leading-relaxed">
              Available 24 hours a day, <br /> 7 days a week.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-[#D4A017] text-lg mt-5">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaGoogle />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-[#D4A017]">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#D4A017]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#D4A017]">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/case-study" className="hover:text-[#D4A017]">
                  Case Study
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#D4A017]">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="/attorney" className="hover:text-[#D4A017]">
                  Our Attorney
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#D4A017]">
                  Auto Accidents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A017]">
                  Slip and Fall
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A017]">
                  Dog Bites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A017]">
                  Drug Crimes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A017]">
                  DUI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A017]">
                  Domestic Violence
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#D4A017] mt-1" />
                <span>
                  238 East Davis Boulevard, Ste 202 <br />
                  Tampa, FL 33606
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="text-[#D4A017]" />
                <a href="tel:8134442817" className="hover:text-[#D4A017]">
                  (813) 444-2817
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4A017]" />
                <a
                  href="mailto:attorney@mcfloridalaw.com"
                  className="hover:text-[#D4A017]"
                >
                  attorney@mcfloridalaw.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaGlobe className="text-[#D4A017]" />
                <a
                  href="https://mcfloridalaw.com"
                  target="_blank"
                  className="hover:text-[#D4A017]"
                >
                  mcfloridalaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 mt-12 pt-5 text-center text-sm">
          © 2025 McCulloch Law P.A. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
