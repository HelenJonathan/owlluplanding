"use client";

// components/FeaturesSection.js
import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const features = [
  { src: "/feature-1.png", title: "Real Time Location" },
  { src: "/feature-2.png", title: "Unique Stickers" },
  { src: "/feature-3.png", title: "Voice Message" },
  { src: "/feature-4.png", title: "Live Conference" },
  { src: "/feature-5.png", title: "HD Video Chat" },
  { src: "/feature-6.png", title: "Animated Emoji" },
];

export default function FeaturesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Auto scroll
  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      autoScroll();
    }, 6000); // Auto-scroll every 6 seconds
    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <section id="feature-page" className="py-16 h-screen">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold">Owllup Cool Features</h3>
          <div className="h-8"></div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex w-[50%] sm:w-1/2 lg:w-1/4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="embla__slide"
              >
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="mb-4">
                    <Image
                      src={feature.src}
                      alt={feature.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

       
       
      </div>
    </section>
  );
}
