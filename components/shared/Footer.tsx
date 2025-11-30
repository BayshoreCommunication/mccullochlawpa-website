"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1640px] mx-auto md:pt-16 pb-6 px-8">
        {/* ⭐ Grid 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Column 1 */}
          <div className="md:col-span-2 max-w-[80%]">
            <div className="flex items-start gap-3">
              <Image
                src="/images/footer/logo.png"
                alt="Logo"
                width={195}
                height={70}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Providing expert chiropractic care and whole-body wellness to help
              you live pain-free.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-primary text-lg">
              <div className="flex gap-4 mt-4 text-primary text-lg">
                <a
                  href="https://www.facebook.com/JachimekChiropracticWellnessCenter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/tampa_chiropractic?igsh=N3llNDhpdXRpbjg1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li>
                <a href="/" className="hover:text-primary">
                  Home
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-primary">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-primary">
                  Let Us Help You
                </a>
              </li>
              <li>
                <a
                  href="https://www.medicalweightlosstampa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Weight Loss Services
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-primary">
                  Meet The Team
                </a>
              </li>
              <li>
                <a href="/the-wellness-journal" className="hover:text-primary">
                  The Wellness Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-primary">
                  Disclaimers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Cookie Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-primary" />{" "}
                <a
                  href="mailto:support@jachimekchiro.com"
                  className="hover:text-primary transition-colors"
                >
                  support@jachimekchiro.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-primary" />{" "}
                <a
                  href="tel:+18139602225"
                  className="hover:text-primary transition-colors"
                >
                  813.960.2225
                </a>
              </li>
              <li className="flex items-start gap-2">
                <HiOutlineLocationMarker className="text-primary mt-1 text-2xl" />
                <a
                  href="https://www.google.com/maps/dir//5111+Ehrlich+Rd+Ste+128,+Tampa,+FL+33624,+United+States/@28.0857723,-82.5372913,17.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88c2c1ddd73750a1:0xdb88558beba9d695!2m2!1d-82.5346904!2d28.0856448?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <span>
                    5111 Ehrlich Road Ste 128, <br /> Tampa, Florida 33624,
                    United States
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-center text-base text-gray-600">
          <p>Copyright © 2025 Jachimek Chiropractic & Wellness Center</p>
          {/* <p>
            All Rights Reserved |{" "}
            <Link href="#" className="text-primary hover:underline">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
