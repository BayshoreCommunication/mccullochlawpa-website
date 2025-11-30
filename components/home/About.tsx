import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";

export default function About() {
  return (
    <section className="bg-gray-50">
      <section className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-6">
          {/* Left Image */}
          <Reveal y={20} opacityFrom={0}>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/about/about.jpg"
                alt="Our Team"
                className="w-auto h-auto object-cover rounded-xl"
                width={630}
                height={470}
              />
            </div>
          </Reveal>

          {/* Right Content */}
          <div className="flex flex-col">
            <Stagger>
              <Reveal tag="h2" y={16} opacityFrom={0}>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  About Us
                </h2>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  At Jachimek Wellness Center, we believe that the body has the
                  ability to heal itself. Our goal is to remove any interference
                  in the nervous system and allow the body to function at its
                  best.
                </p>
              </Reveal>
              <Reveal tag="p" y={12} opacityFrom={0.1}>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  Stop by and meet our amazing team! We are here for you! Our
                  friendly staff is dedicated to providing you with the best
                  care and service to ensure your comfort throughout your
                  journey. 
                </p>
              </Reveal>

              {/* Explore More button */}
              <Reveal y={10} opacityFrom={0}>
                <Link
                  href={"/team"}
                  className="bg-black text-white px-6 py-3 rounded-full w-fit transition mb-8 hover:bg-white hover:border hover:border-black hover:text-black"
                >
                  Explore More
                </Link>
              </Reveal>

              {/* Google Reviews */}
              <Reveal y={10} opacityFrom={0}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/about/google.png"
                      alt="Google"
                      width={1000}
                      height={800}
                      className="w-16"
                    />
                    <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  </div>
                  <div className="text-black text-sm">
                    <span className="font-semibold">4.9</span> | 140 Reviews
                    <div>
                      <Link
                        href="https://share.google/fr5fqwEAfsaCT7WNX"
                        className="text-primary underline hover:text-green-700"
                      >
                        View all Google Reviews here
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </Stagger>
          </div>
        </div>
      </section>
    </section>
  );
}
