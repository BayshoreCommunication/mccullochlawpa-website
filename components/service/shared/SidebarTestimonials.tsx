"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Michael M.",
    review:
      "Drew is very professional and acts intentionally. He provides realistic expectations and follows through on his responsibilities. Recently we hired Drew for a case dealing with both a state criminal defense case, as well as some issues with the Department of Health. Through Drew, I was able to achieve best case scenario, and a significantly reduced sentence compared to similar offenders. I fully recommend and endorse Drew, he’s a class act.",
    rating: 5,
    image: "",
  },
  {
    name: "Haley",
    review:
      "Drew is extremely personable, persistent, resilient and reliable. I have never had to speak with no one but him directly at all hours, day or night on his personal cellphone. He has been handling a very unique high conflict family case for me. It’s a highly unique case involving severe mental illness on my behalf. He has never judged or given up on me. He has truly spent the time to listen to my special mental disability and has pushed a very compassionate yet aggressive approach to fight on my behalf. Absolutely highly recommended.",
    rating: 5,
    image: "",
  },
  {
    name: "Angela",
    review:
      "While I was ignorant of the criminal process, Drew guided me thoroughly through the entire DUI process making sure that I was fully aware of all my options. He took all of my wishes into consideration as well. I am completely satisfied with the outcome and feel as if I came out of the process “on top”! Drew is highly recommended and trusted by me! “Charges dismissed” and I feel as if I came out with a new friend as well! #winwin",
    rating: 5,
    image: "",
  },
  {
    name: "Tracy G.",
    review:
      "If you are looking for an attorney who truly cares about you and the outcome of your case, than you need to hire Attorney Drew McCulloch. He works incredibly hard for you and makes sure you feel comfortable and prepared for your case. I highly recommend Mr. McCulloch to anyone in need of a criminal defense attorney. He really is a 5 star attorney.",
    rating: 5,
    image: "",
  },
  {
    name: "Brandon",
    review:
      "Micheal McCullough was the best lawyer I’ve had hands down, and I’ve had a few. Even from the beginning of my case, it was easy to tell he was going to be better then other lawyers I have dealt with. He always made plenty of time for me, making sure I understood everything fully and that I had any and all information I needed or wanted. It was also very clear he was interested in the best possible outcome for me, and not just the quick plea deal. In the end, he got me a felony dropped to a misdemeanor with one day time served. Which all things considered was amazing and I didn’t think would have been even possible. I will use this lawyer every time, let’s hope that’s not necessary. At any rate, if you need a competent lawyer who’s willing to go the extra mile and spend the time you deserve on your case. he is your man.",
    rating: 5,
    image: "",
  },
  {
    name: "Ariel J.",
    review:
      "They were honest from the beginning, did their best and got the job done. I didn’t have to appear to court and take a day off for it. Continued working while they handled it all. Great work and would recommend to anyone in need of their services. ??",
    rating: 5,
    image: "",
  },
  {
    name: "Luchiana M.",
    review:
      "Had two tickets completely dismissed!! This was my first time getting a ticket and they were able to answer all my questions and keep me informed. I will definitely be using them again. I recommend!!",
    rating: 5,
    image: "",
  },
  {
    name: "Dennis B.",
    review:
      "Thank you McCulloch law you guys are the greatest, you were able to settle my traffic ticket in court without any penalties to me, no fines, no points and no worries about traffic school. Thanks you very much for the great work you are doing for the little guy like me. God Bless.",
    rating: 5,
    image: "",
  },
  {
    name: "Damien S.",
    review:
      "Fair, frank, honest and forthright. They under promised and far over delivered. The communication was professional and simple. There was never a moment I didn’t know where I stood or where the case was. My traffic violation was completely dismissed two months after I agreed to have them represent me as I contested my citation. The support staff, administrative assistants and clerks I interacted with were all of the highest class and integrity. I enthusiastically recommend them to anyone seeking legal assistance as the full scope of my interaction was with fantastic individuals tha we’re all part of a high performing and highly professional/proficient legal team.",
    rating: 5,
    image: "",
  },
  {
    name: "Dawn T.",
    review:
      "Very professional and informative on the outcome and the steps needed to be taken for my case. They were able to dismiss my ticket and I got no points and to me that’s well worth the money and I would recommend them to anyone. Thank you very much!",
    rating: 5,
    image: "",
  },
  {
    name: "David S.",
    review:
      "Got a ticket for running a stop sign and I was not guilty. I called McCulloch law. They took my case for a fraction of what I expected to pay. McCulloch Law took care of everything. I never had to go to court or do anything. They did it all and got my ticket dismissed. Everything I could have hoped for. McCulloch Law is the best.",
    rating: 5,
    image: "",
  },
  {
    name: "Katuray R.",
    review:
      "They are a wonderful Company, Very skilled and professional. They got my case thrown out, No points on my license and nope court costs..THE BEST…",
    rating: 5,
    image: "",
  },
  {
    name: "Marshal P.",
    review:
      "This firm was able to have the citation completely dismissed. Very easy to work with. Highly recommend their services.",
    rating: 5,
    image: "",
  },
  {
    name: "Tracy C",
    review:
      "I called and made arrangements for a lawyer to represent me for a traffic ticket. I did not have to appear in court and they got all the charges dismissed. I was very happy with their service and the representative I spoke with on the phone was very helpful. I would highly recommend this law office to anyone in need of legal representation.",
    rating: 5,
    image: "",
  },
  {
    name: "Gelica S.",
    review:
      "Honestly very satisfied with the services accomplished. And very grateful to. Had a ticket written down for a accident that I was involved in.And they were able to dismiss my ticket. Which I’m very happy with outstanding service.",
    rating: 5,
    image: "",
  },
  {
    name: "Chennel A.",
    review:
      "They handled it from start to finish and dismissed my ticket. I did not have to call once. Thank you so much!",
    rating: 5,
    image: "",
  },
  {
    name: "Erica T.",
    review:
      "This was the absolute best experience I have had under unfortunate circumstances. Drew is the best at what he does and he is very personable. He lead me through the process and the outcome was far greater than I anticipated. I would recommend Drew to anyone in need of his expertise",
    rating: 5,
    image: "",
  },
  {
    name: "Nelson P.",
    review:
      "I’m really grateful as to how diligent your law office responded to my traffic ticket and giving me confidence to fight that ticket on my behalf. Thank you for staying on top of your game and even though you don’t have control as to how things may turn out, I feel that I wasn’t another number and because of your law firm I feel vindicated",
    rating: 5,
    image: "",
  },
];

export default function SidebarTestimonials() {
  return (
    <div className="bg-[#001B47] shadow-lg rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-4 border-b pb-2 text-white">
        Client Testimonials
      </h3>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col">
              <p className="text-sm text-white leading-relaxed">
                {item.review}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500 text-white font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-sm text-white">
                    {item.name}
                  </p>

                  <div>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-orange-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
