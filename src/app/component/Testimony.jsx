"use client";

// components/TestimonialsSection.js
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const testimonials = [
  {
    text: "Owllup has completely transformed how I stay connected with my friends and family. The video chat feature is incredibly reliable, and the interface is so intuitive. Plus, the personalized feeds ensure I never miss out on important updates. Highly recommend! ⭐⭐⭐⭐⭐",
  },
  {
    text: "As a project manager, Owllup's group chat feature has been a game-changer for my team. We can easily discuss ideas, share files, and stay organized—all in one place. The real-time notifications ensure nothing falls through the cracks. Couldn't ask for more!",
  },
  {
    text: "Finally, a social media app that prioritizes privacy! Owllup's customizable privacy settings give me peace of mind knowing I have control over who sees my posts and profile information. It's refreshing to see a platform that values user privacy.",
  },
  {
    text: "I'm not the most tech-savvy person, but Owllup's interface is so clean and easy to navigate. Whether I'm browsing my feed or engaging in group chats, everything feels intuitive. Plus, the multimedia integration makes sharing photos and videos a breeze. Love it!",
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="h-screen" id="testimonial">
      <div className="container mx-auto relative">
        <div className="row mt-10">
          <div className="text-center">
            <h3 className="text-3xl font-semibold">Testimonials</h3>
            <div className="h-8"></div>
          </div>
        </div>
        <div className="row relative">
          <div className="col-xs-12">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex">
                {testimonials.map((testimonial, index) => (
                  <div className="embla__slide w-full p-4 max-w-sm mx-auto" key={index}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center -ml-10">
              <button
                onClick={scrollPrev}
                className=" p-3 rounded-full"
              >
                <Image
                  src="/arrow-left.png"
                  alt="arrow"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -mr-10">
              <button
                onClick={scrollNext}
                className="p-3 rounded-full"
              >
                <Image
                  src="/arrow-right.png"
                  alt="arrow"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index === selectedIndex ? "bg-[#6858db]" : "border border-[#6858db]"
                  }`}
                  onClick={() => emblaApi.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
