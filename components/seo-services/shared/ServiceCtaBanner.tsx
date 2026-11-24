import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

export interface ServiceCtaBannerProps {
  heading?: string;
  consultationText?: string;
  consultationHref?: string;
  phoneNumber?: string;
  phoneHref?: string;
}

/**
 * Shared dark-navy CTA section modeled on the main service pages, placed after every
 * three content sections on criminal defense SEO landing pages.
 */
export default function ServiceCtaBanner({
  heading = "Contact Our Criminal Defense Attorneys in 238 East Davis Boulevard, Ste 202 Tampa, FL 33606",
  consultationText = "FREE CASE CONSULTATION",
  consultationHref = "/contact",
  phoneNumber = "(813) 444-2817",
  phoneHref = "tel:8134442817",
}: ServiceCtaBannerProps) {
  return (
    <section className="w-full bg-white py-8 md:py-12 border-y border-slate-200 font-sans">
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto bg-[#001B47] rounded-2xl p-6 sm:p-8 md:p-10 text-center text-white shadow-lg">
          <h2 className="text-base sm:text-lg md:text-xl tracking-widest uppercase mb-6 text-gray-200 max-w-2xl mx-auto w-full font-medium leading-relaxed">
            {heading}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={consultationHref}
              className="bg-primary hover:bg-[#c89d3b] text-slate-950 transition px-6 py-3 rounded-full font-bold inline-flex items-center justify-center"
            >
              {consultationText}
            </Link>

            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 transition px-6 py-3 rounded-full font-semibold text-black"
            >
              <FiPhoneCall size={20} aria-hidden="true" />
              <span>{phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
