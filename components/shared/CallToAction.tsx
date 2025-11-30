// components/HeroSection.js
import Link from "next/link";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

export default function PainRelief() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/images/painrelief/bg.png')" }} // Ensure the file is in /public
    >
      <div className="max-w-[1640px] mx-auto px-8 py-8 md:py-16 text-center text-white">
        <Stagger>
          <Reveal tag="h1" y={16} opacityFrom={0}>
            <h1 className="text-[36px] font-semibold">
              Get <span className="text-primary">Pain Relief</span> Today With
              Tampa Bays Chiropractor
            </h1>
          </Reveal>
          <Reveal tag="p" y={12} opacityFrom={0.1}>
            <p className="text-sm md:text-base mt-4 max-w-2xl mx-auto">
              Helping Tampa families live healthier, pain-free lives through
              personalized chiropractic chiropractic care and whole-body
              wellness
            </p>
          </Reveal>
          <Reveal y={10} opacityFrom={0}>
            <div className="mt-8 ">
              <Link
                href="https://portal.sked.life/new-patient/?key=489579519b65115ba47eec5ca31a717befcba2464a5491dc864e7173c4e6cfe6"
                target="_blank"
                className="group inline-flex gap-2 items-center px-6 py-3 bg-primary text-white hover:text-black text-base font-medium rounded-full hover:bg-white transition"
              >
                Not a Patient Yet? Schedule Today!
                <div className="bg-white group-hover:bg-black/20  rounded-full w-5 h-5 flex items-center justify-center text-black">
                  <svg
                    className="w-4 h-4 "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </Reveal>
        </Stagger>
      </div>
    </div>
  );
}
